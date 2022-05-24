import BodyCardWrapper from "../BodyCardWrapper";

// ******************************************* AUTH START *******************************************
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MigrasiSubsForm() {
  const router = useRouter();

  const [selectService, setSelectService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});

  // Fethcer Axios
  const fetcherAxios = async (...args) =>
    axios
      .get(...args)
      .then((res) => res)
      .catch((err) => (err.response ? err.response : err));

  // SWR to auth to server
  const { data, error } = useSWR(
    [
      `${process.env.BACKEND_SERVER}/dashboard`,
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
        <div className="d-flex justify-content-center m-2">
          <p>Authenticating...</p>
        </div>
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

  // ******************************************* AUTH END *******************************************
  // Bellow is return for aunthenticated user
  // ******************************************* AUTH END *******************************************

  // FORM HANDLER
  function inputHandler(input) {
    let copyFormData = { ...formData };
    copyFormData[input.id] = input.value;
    setFormData(copyFormData);
    console.log(copyFormData);
  }

  async function handleGetServices() {
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
    </div>
  );

  return (
    <>
      <BodyCardWrapper
        title="Migrasi Pelanggan"
        content={content}
      ></BodyCardWrapper>
    </>
  );
}
