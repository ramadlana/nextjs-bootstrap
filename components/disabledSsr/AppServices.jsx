import axios from "axios";
import { useEffect, useState } from "react";

export default function AppServices() {
  const [resp, setResp] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.BACKEND_SERVER}/dashboard/app-services`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
        },
      })
      .then((resp) => {
        setResp(resp);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="text-center">
          <div className="progress progress-sm">
            <div className="progress-bar progress-bar-indeterminate"></div>
          </div>
          <div className="d-flex justify-content-center m-2">Loading Data</div>
        </div>
      </>
    );
  }

  if (resp?.status === 401) {
    return <p>Unautorized</p>;
  }

  if (err) {
    return <>{err}</>;
  }

  if (resp?.status === 200) {
    return <p>{JSON.stringify(resp.data)}</p>;
  }
}
