import useSWR from "swr";
import axios from "axios";
import Navbar from "../components/Navbar";
import NavbarMember from "../components/NavbarMember";
import TableRadcheck from "../components/table/TableRadcheck";
import Modal from "../components/Modal";
import AddSubsForm from "../components/AddSubsForm";
import { useStore } from "../state/globalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fethcer Axios
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function Dashboard({ cookies }) {
  const setDataAddSubs = useStore((state) => state.setAddSubsFormState);
  const dataAddSubs = useStore((state) => state.addSubsFormState);
  // Load localstorage key from next JS is unique
  // Because is server rendered component in first , to localstorage is not available, because localstorage is browser only
  let access_token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    access_token = localStorage.getItem("access_token");
  }

  const { data, error } = useSWR(
    [
      `${process.env.BACKEND_SERVER}/dashboard`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": access_token,
        },
      },
    ],
    fetcherAxios
  );

  // Handle Modal button
  // when submit clicked pass this function
  const handleSubmit = async (data) => {
    toast.info("Submitting data..");
    // window.alert(JSON.stringify(data));
    try {
      const sendData = await axios.post(
        `${process.env.BACKEND_SERVER}/dashboard/radiususer`,
        { data: data },
        {
          headers: {
            "x-access_token": access_token,
          },
        }
      );
      toast.success("Success add new user");
    } catch (error) {
      if (error.response) return toast.error(error.response.data.message);
      toast.error(error.message);
    }
  };

  // clear DataAddSubs every button modal clicked
  const handleInitClickModal = async () => {
    setDataAddSubs({});
  };

  // If error Syntax and SWR
  if (error) return <h1>another error happen: {JSON.stringify(error)}</h1>;

  // If data not received yet (loading in fetch)
  if (!data)
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm mx-3 "
              role="status"
              aria-hidden="true"
            />
            Authenticating...
          </button>
        </div>
      </>
    );

  // If return status code 401 Unauthorized
  if (data.status === 401)
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="alert alert-warning" role="alert">
            You dont have permission to access this page
          </div>

          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/user/login")}
          >
            Sign in to Access
          </button>
        </div>
      </>
    );

  // If not have status code. for Ex: network error / Others Error
  if (!data.status)
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>
            Failed {data.message} {data.config.url}
          </h2>
        </div>
      </div>
    );

  // If return status code 200 Authorized
  if (data.status === 200)
    return (
      <div>
        <ToastContainer />
        <NavbarMember />
        <div className="container">
          <h3>Dashboard</h3>
          <div className="alert alert-success" role="alert">
            {data.data.message}
          </div>
          <Modal
            modal_id="add-user"
            button_name="Add Subscriber"
            modal_title="Add Subscriber Form"
            modal_content={<AddSubsForm></AddSubsForm>}
            onClickAction={() => handleSubmit(dataAddSubs)}
            button_init_click={handleInitClickModal}
          ></Modal>
          <div className="m-3"></div>
          <TableRadcheck></TableRadcheck>
        </div>
      </div>
    );
}
