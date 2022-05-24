// ******************************************* AUTH START *******************************************
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Auth({ auth_page, url }) {
  const router = useRouter();

  const fetcherAxios = async (...args) =>
    axios
      .get(...args)
      .then((res) => res)
      .catch((err) => (err.response ? err.response : err));

  // SWR to auth to server
  const { data, error } = useSWR(
    [
      `${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access_token": localStorage.getItem("access_token"),
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
        <div className="progress progress-sm">
          <div className="progress-bar progress-bar-indeterminate"></div>
        </div>
        <div className="d-flex justify-content-center m-2">Loading</div>
      </>
    );

  // If return status code 401 Unauthorized
  if (data.status === 401) router.push("/user/login");

  // If not have status code. for Ex: network error / Others Error
  if (!data.status)
    return (
      <div>
        <div className="container">
          <h2>
            Failed {data.message} {data.config.url}
          </h2>
        </div>
      </div>
    );

  return auth_page;
}
