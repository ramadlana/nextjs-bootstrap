import useSWR from "swr";
import axios from "axios";
import Navbar from "../../components/Navbar";

const fetcherAxios = async (...args) =>
  axios
    .get(...args)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));

export default function Dashboard({ cookies }) {
  const { data, error } = useSWR(
    [
      `${process.env.BACKEND_SERVER}/sign/out`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: "true",
      },
    ],
    fetcherAxios
  );

  if (error) return <h1>another error happen: {JSON.stringify(error)}</h1>;

  if (!data)
    return (
      <div className="m-3">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm mx-3 "
            role="status"
            aria-hidden="true"
          />
          Logging Out...
        </button>
      </div>
    );
  if (data.status === 200) window.location.href = "/";
  if (data.status !== 200)
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Logged out failed {data.data.message}</h2>
        </div>
      </div>
    );
  if (!data.status)
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Logged out failed {data.message}</h2>
        </div>
      </div>
    );
}
