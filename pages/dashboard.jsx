import useSWR from "swr";
import axios from "axios";
import Navbar from "../components/Navbar";
import DatatablesUseeffect from "../components/example-components/datatables_useeffect";
import DatatablesUseSWR from "../components/example-components/datatables_useSWR";
import NavbarMember from "../components/NavbarMember";

// Fethcer Axios
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function Dashboard({ cookies }) {
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
            You dont have permission to access this page. please login
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
        <NavbarMember />
        <div className="container">
          <h1>Dashboard</h1>
          <div className="alert alert-success" role="alert">
            {data.data.message}
          </div>
        </div>
      </div>
    );
}
