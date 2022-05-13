import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import Navbar from "../../components/Navbar";
import NavbarMember from "../../components/NavbarMember";

import Modal from "../../components/Modal";
import EditUser from "../../components/form/EditUser";
import { useStore } from "../../state/globalState";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin
import utc from "dayjs/plugin/utc";
import EditService from "../../components/form/EditService";
dayjs.extend(utc);
dayjs.extend(timezone);

// Fethcer Axios
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function UserDetail({ queryID }) {
  const { back } = useRouter();
  // Zustand state consume
  const formData = useStore((state) => state.addSubsFormState);

  // Load localstorage key from next JS is unique
  // Because is server rendered component in first , to localstorage is not available, because localstorage is browser only
  let access_token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    access_token = localStorage.getItem("access_token");
  }

  // Get data using SWR
  const { data, error } = useSWR(
    [
      `${process.env.BACKEND_SERVER}/dashboard/radiususer/${queryID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": access_token,
        },
      },
    ],
    fetcherAxios
  );

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
            Loading data...
          </button>
        </div>
      </>
    );

  // If error Syntax and SWR
  if (error) return <h1>another error happen: {JSON.stringify(error)}</h1>;

  // If return status code 401 Unauthorized
  if (data.status === 401)
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="alert alert-warning" role="alert">
            You dont have permission to access this page: {data.data.message}
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

  // If data.user not found
  if (!data.data.user) return <h4>user not found</h4>;

  // handleSubmit Form
  const handleSubmitEditUser = async () => {
    const editedData = {
      id: formData.id,
      username: formData.username,
      email: formData.email,
      address: formData.address,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
    };
    toast.info("Editing Data.. Please wait");
    try {
      const resp = await axios.patch(
        `${process.env.BACKEND_SERVER}/dashboard/radiususer`,
        { editedData },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access_token": access_token,
          },
        }
      );
      toast.success(resp.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // If return status code 200 Authorized
  if (data.status === 200) {
    const date_str = dayjs(data.data.user.expirydate).format(
      "DD-MM-YYYY HH:mm:ss WIB"
    );

    return (
      <>
        <NavbarMember></NavbarMember>
        <ToastContainer />
        <div className="container">
          <h5>User details</h5>
          <table className="table table-hover">
            <thead></thead>
            <tbody>
              <tr>
                <td>Username</td>
                <td>{data.data.user.username} </td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>{data.data.user.first_name} </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{data.data.user.last_name} </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{data.data.user.email} </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{data.data.user.address} </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.data.user.phone} </td>
              </tr>
              <tr>
                <td>Service Name</td>
                <td>{data.data.user.app_service.service_name} </td>
              </tr>
              <tr>
                <td>Service Status</td>
                <td>{data.data.user.service_status} </td>
              </tr>

              <tr>
                <td>Service Radius Group</td>
                <td>{data.data.user.radusergroup.groupname}</td>
              </tr>

              <tr>
                <td>Service Ammount</td>
                <td>IDR {data.data.user.app_service.service_ammount}</td>
              </tr>

              <tr>
                <td>Service Expiry Date</td>
                <td>{date_str} </td>
              </tr>
            </tbody>
          </table>
          <Modal
            modal_id="edit-data"
            button_name="Edit Data"
            modal_title="Edit Data"
            modal_content={<EditUser data={data.data.user}></EditUser>}
            onClickAction={() => handleSubmitEditUser()}
          ></Modal>
          <Modal
            modal_title="Change Service"
            button_name="Change Service"
            modal_id="change-service"
            modal_content={<EditService data={data.data.user}></EditService>}
            // onClickAction={()=> }
          ></Modal>

          <Modal
            modal_id="payment-history"
            button_name="Payment History"
            modal_title="Payment History"
          ></Modal>
          <button className="btn btn-info btn-sm mx-1" onClick={() => back()}>
            Back
          </button>
        </div>
      </>
    );
  }
}

// Get context. get req.query
export async function getServerSideProps(context) {
  const queryID = parseInt(context.query.id);
  // Pass data to the page via props
  return { props: { queryID: queryID } };
}
