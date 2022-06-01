import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Modal from "../components/modal";
import ModalNoFooter from "../components/ModalNoFooter";

export default function AppServices2() {
  const inputRef = useRef();
  const [resp, setResp] = useState();
  const [err, setErr] = useState();
  const [togleForm, setTogleForm] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.BACKEND_SERVER}/dashboard/app-services`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
        },
      })
      .then((resp) => {
        setResp(resp);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, []);

  //   If Other Network Happen. For Example Network Error
  if (err) {
    return <>{err}</>;
  }

  //   If Axios Response not ready yet (loading)
  if (!resp) {
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

  //   If axios response status === 401 (Unauthorized)
  if (resp.status === 401) {
    return <p>Unautorized</p>;
  }

  function handleClick(value) {
    const selected_data = resp.data.message.find((p) => {
      return p.service_name === value;
    });

    setSelectedData(selected_data);

    setFramedPool(
      selected_data.radgroupreply.find((f) => f.attribute === "Framed-Pool")
    );
    setMikrotikRateLimit(
      selected_data.radgroupreply.find(
        (f) => f.attribute === "Mikrotik-Rate-Limit"
      )
    );

    setTogleForm(!togleForm);
    inputRef.current.focus();
  }

  //   If resp status === 200 or 201
  if (resp.status === 200) {
    return (
      <>
        <ModalNoFooter
          button_name="a"
          modal_content={<>halo</>}
          modal_id="ida"
          key={"ida"}
          modal_title="test"
        ></ModalNoFooter>
        <div className="card">
          <div className="table-responsive">
            <table className="table table-vcenter card-table">
              <thead>
                <tr>
                  <td>Service Name</td>
                  <td>Service Service Ammount</td>
                  <td>Service Period</td>
                  <td>Installation Fee</td>
                  <td>Profile Configuration</td>
                </tr>
              </thead>
              <tbody>
                {resp.data.message.map((data) => {
                  return (
                    <tr key={data.service_name}>
                      <td style={{ cursor: "pointer" }}></td>
                      <td>{data.service_ammount}</td>
                      <td>{data.service_period}</td>
                      <td>{data.installation_fee}</td>
                      <td>
                        {data.radgroupreply.map((rad_data) => {
                          return (
                            <button
                              key={rad_data.id}
                              className="btn btn-primary btn-sm m-1"
                            >
                              {rad_data.attribute} {rad_data.value}
                            </button>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/*  */}

        {/*  */}
      </>
    );
  }
}
