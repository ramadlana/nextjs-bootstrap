import useSWR from "swr";
import axios from "axios";
import Navbar from "../../components/Navbar";
import TableAllUsers from "../../components/example-components/TableAllUsers";
import NavbarMember from "../../components/NavbarMember";

// Fethcer Axios
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function DashboardProd({ cookies }) {
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
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
            <p>Loading Page</p>
          </div>
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

  // If return status code 200 Authorized
  if (data.status === 200)
    return (
      <div>
        <NavbarMember></NavbarMember>
        <div className="container">
          <h2>Dashboard</h2>
          <h6>Data table - Pagination - Searching</h6>
          <div className="alert alert-success" role="alert">
            {`Welcome Back ${localStorage.getItem("username")}`}
          </div>
          {/* Call Table Components */}
          <TableAllUsers></TableAllUsers>
        </div>
      </div>
    );
}
