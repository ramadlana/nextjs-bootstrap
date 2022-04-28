import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import Navbar from "../../components/Navbar";
import NavbarMember from "../../components/NavbarMember";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(timezone);

// Fethcer Axios
const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Load localstorage key from next JS is unique
  // Because is server rendered component in first , to localstorage is not available, because localstorage is browser only
  let access_token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    access_token = localStorage.getItem("access_token");
  }

  const { data, error } = useSWR(
    [
      `${process.env.BACKEND_SERVER}/dashboard/radiususer/${id}`,
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
  if (data.status === 200) {
    const date_str = dayjs(data.data.user.expirydate)
      .tz("Asia/Jakarta")
      .toString();
    return (
      <>
        <NavbarMember></NavbarMember>
        <div className="container">
          <table className="table table-hover">
            <thead></thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>{data.data.user.username} </td>
              </tr>
              <tr>
                <td>first_name</td>
                <td>{data.data.user.first_name} </td>
              </tr>
              <tr>
                <td>last_name</td>
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
                <td>Service</td>
                <td>{data.data.user.services} </td>
              </tr>
              <tr>
                <td>Service Status</td>
                <td>{data.data.user.service_status} </td>
              </tr>
              <tr>
                <td>Expiry Date</td>
                <td>{date_str} </td>
              </tr>
            </tbody>
          </table>
          <p>User ID: {id}</p>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control mb-3" id="username" />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="text" className="form-control mb-3" id="email" />

          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input type="text" className="form-control mb-3" id="address" />

          <button className="btn btn-primary" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </>
    );
  }
}
