import BodyCardWrapper from "../BodyCardWrapper";
import { ToastContainer, toast } from "react-toastify";

// ******************************************* AUTH START *******************************************
import axios from "axios";

import { useState } from "react";

export default function MigrasiSubsForm() {
  const [selectService, setSelectService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  // FORM HANDLER
  function inputHandler(input) {
    let copyFormData = { ...formData };
    copyFormData[input.id] = input.value;
    setFormData(copyFormData);
  }

  async function handleGetServices() {
    if (selectService) return null;
    setIsLoading(true);
    const data = await axios.get(
      `${process.env.BACKEND_SERVER}/dashboard/getservices`,
      {
        headers: {
          "x-access-token": localStorage.getItem("access_token"),
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

  // Handle Modal button. When submit clicked pass this function
  const handleSubmit = async (data) => {
    toast.info("Submitting data..");
    try {
      const resp = await axios.post(
        `${process.env.BACKEND_SERVER}/dashboard/radiususer`,
        { data: data },
        {
          headers: {
            "x-access-token": localStorage.getItem("access_token"),
          },
        }
      );
      toast.success(`${resp.data.message}`);
    } catch (error) {
      if (error.response) return toast.error(error.response.data.message);
      toast.error(error.message);
    }
  };

  // END FORM HANDLER

  // RUN IF  data !=null

  const content = (
    <div>
      <form id="modal-form">
        <div className="row">
          <div className="col-6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="username"
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="first_name"
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="last_name"
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="password"
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="email"
              onChange={(element) => inputHandler(element.currentTarget)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="phone"
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="address"
              onChange={(element) => inputHandler(element.currentTarget)}
            />
            <label htmlFor="expiry_date" className="form-label">
              Expiry Date
            </label>

            <input
              type="datetime-local"
              className="form-control mb-3"
              id="expiry_date"
              onChange={(element) => inputHandler(element.currentTarget)}
            ></input>

            <label htmlFor="service" className="form-label">
              Service
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="service"
              onChange={(element) => inputHandler(element.currentTarget)}
              onClick={handleGetServices}
            >
              <option defaultValue={null}>Select Service</option>
              {renderSelectValue(
                selectService ? selectService.data.data : null
              )}
            </select>
          </div>
        </div>
      </form>
      <button
        className="btn btn-primary m-1"
        onClick={() => handleSubmit(formData)}
      >
        Migrate
      </button>
      <button className="btn btn-warning m-1">Reset</button>
    </div>
  );

  return (
    <>
      <ToastContainer />
      <BodyCardWrapper
        title="Migrasi Pelanggan"
        content={content}
      ></BodyCardWrapper>
    </>
  );
}
