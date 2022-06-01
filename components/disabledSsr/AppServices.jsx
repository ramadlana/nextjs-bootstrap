import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "../../state/globalState";
import ChangeServiceForm from "../form/ChangeServiceForm";
import ModalNoFooter from "../ModalNoFooter";
import "react-toastify/dist/ReactToastify.css";
import AddServiceForm from "../form/AddServiceForm";
import { filter } from "lodash";

export default function AppServices() {
  const [resp, setResp] = useState();
  const [err, setErr] = useState();

  //   Zustand
  const formState = useStore((state) => state.formState);
  const setFormState = useStore((state) => state.setFormState);

  useEffect(() => {
    axios
      .get(`${process.env.BACKEND_SERVER}/dashboard/app-services`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
        },
      })
      .then((resp) => {
        setFormState({ all: resp, selected: "" });
        setResp(resp);
      })
      .catch((err) => {
        setErr(err.message);
      });
  }, [setFormState]);

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

  //   Handle click with filteed
  function handleClick(value) {
    const copyFormState = { ...formState };

    const selectedData = copyFormState.all.data.message.find(
      (f) => f.service_name === value
    );
    copyFormState.selected = selectedData;
    setFormState(copyFormState);
  }

  //   delete confirmation popup
  async function handleDelete(service_name) {
    try {
      const respHandle = await axios.post(
        `${process.env.BACKEND_SERVER}/dashboard/deleteservices`,
        { service_name: service_name },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("access_token"),
          },
        }
      );

      if (!respHandle.data.success) {
        toast.error(`${respHandle.data.message}`);
      }
      if (respHandle.data.success) toast.success(`${respHandle.data.message}`);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }
  //   let DeleteConfirmation = (

  //   );

  //   If resp status === 200 or 201
  if (resp.status === 200) {
    return (
      <>
        <ToastContainer></ToastContainer>

        <div className="card">
          <div className="card-header">Change Services</div>
          <div className="card-body">
            <ModalNoFooter
              button_name="Add Service Profile"
              modal_content={<AddServiceForm></AddServiceForm>}
              modal_title="add service profile"
              modal_id="service_add"
            ></ModalNoFooter>
            <div className="table-responsive mt-2">
              <table className="table table-vcenter card-table table-nowrap">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Service Service Ammount</th>
                    <th>Service Period</th>
                    <th>Installation Fee</th>
                    <th>Profile Configuration</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {resp.data.message.map((data) => {
                    return (
                      <tr key={data.service_name}>
                        <td style={{ cursor: "pointer" }}>
                          <ModalNoFooter
                            button_name={data.service_name}
                            modal_id="ida"
                            modal_title={data.service_name}
                            button_init_click={() => {
                              handleClick(data.service_name);
                            }}
                            modal_content={
                              <ChangeServiceForm></ChangeServiceForm>
                            }
                          ></ModalNoFooter>
                        </td>
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
                        <td>
                          <button
                            className="btn btn-danger btn-sm m-1"
                            onClick={() => handleDelete(data.service_name)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
