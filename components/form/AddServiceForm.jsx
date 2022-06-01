import { useState } from "react";
import InputForm from "./Input";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddServiceForm() {
  const [formState, setFormState] = useState();

  function inputHandler(input) {
    let copyFormState = { ...formState };
    copyFormState[input.id] = input.value;
    setFormState(copyFormState);
  }

  async function submitHandler() {
    try {
      const resp = await axios.post(
        `${process.env.BACKEND_SERVER}/dashboard/manage-services`,
        { data: formState },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("access_token"),
          },
        }
      );
      console.log(resp);
      if (!resp.data.success) toast.error(`${resp.data.message}`);
      if (resp.data.success) toast.success(`${resp.data.message}`);
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
    }
  }

  return (
    <>
      <form id="modal-form">
        <InputForm
          id="service_name"
          label="Service Ammount"
          value={formState?.service_name}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="service_ammount"
          label="Service Ammount"
          value={formState?.service_ammount}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="service_period"
          label="Service Period"
          type="number"
          value={formState?.service_period}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="installation_fee"
          label="Installation fee"
          value={formState?.installation_fee}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="framed_pool"
          label="IP Pool"
          value={formState?.framed_pool}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="mikrotik_rate_limit"
          label="Rate Limit"
          value={formState?.mikrotik_rate_limit}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>
        <p>Example: 1M/1M 2M/2M 1M/1M 40/40 or 1M/1M</p>
      </form>
      <button className="btn btn-primary" onClick={submitHandler}>
        Save
      </button>
    </>
  );
}
