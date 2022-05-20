import { useStore } from "../../state/globalState";
import axios from "axios";
import { useState } from "react";

export default function EditService({ data }) {
  const [selectService, setSelectService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formData = useStore((state) => state.addSubsFormState);
  const setFormData = useStore((state) => state.setAddSubsFormState);

  function inputHandler(input) {
    let copyData = { ...data };
    copyData[input.id] = input.value;
    data[input.id] = copyData[input.id];
    if (input["id"] === "services_id")
      copyData["radusergroup"]["groupname"] = input.value;
    copyData["isChangeService"] = true;
    setFormData(copyData);
  }

  async function getServices() {
    if (selectService) return null;
    setIsLoading(true);
    const data = await axios.get(
      `${process.env.BACKEND_SERVER}/dashboard/getservices`,
      {
        headers: {
          "x-access_token": localStorage.getItem("access_token"),
        },
      }
    );
    setIsLoading(false);
    setSelectService(data);
  }

  function renderSelectValue(data) {
    if (!selectService) return <option>Loading..</option>;
    if (isLoading) return <option>Loading..</option>;
    return data.map((item) => (
      <option value={item.service_name} key={item.service_name}>
        {item.service_name}
      </option>
    ));
  }
  return (
    <>
      <form id="modal-form">
        <div className="row">
          <div className="col-12">
            <table className="table table-vcenter">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{data?.username}</td>
                </tr>
                <tr>
                  <td>Change To</td>
                  <td>{data?.services_id}</td>
                </tr>
                <tr>
                  <td>Ammount </td>
                  <td>{data?.app_service?.service_ammount}</td>
                </tr>
              </tbody>
            </table>
            <select
              className="form-select"
              aria-label="Default select example"
              id="services_id"
              onChange={(element) => inputHandler(element.currentTarget)}
              onClick={getServices}
            >
              <option defaultValue={null}>Select Service</option>
              {renderSelectValue(
                selectService ? selectService.data.data : null
              )}
            </select>
          </div>
        </div>
      </form>
    </>
  );
}
