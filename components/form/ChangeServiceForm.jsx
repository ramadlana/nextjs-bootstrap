import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useStore } from "../../state/globalState";
import InputForm from "./Input";

export default function ChangeServiceForm() {
  const formState = useStore((state) => state.formState);
  const setFormState = useStore((state) => state.setFormState);

  let data = { ...formState.selected };

  let framed_pool_id = formState.selected.radgroupreply?.findIndex(
    (f) => f.attribute === "Framed-Pool"
  );

  let mikrotikRateLimit_id = data?.radgroupreply?.findIndex(
    (f) => f.attribute === "Mikrotik-Rate-Limit"
  );

  // FORM HANDLER
  function inputHandler(input) {
    let copyFormState = { ...formState };
    copyFormState.selected[input.id] = input.value;
    setFormState(copyFormState);
  }

  async function submitHandler() {
    try {
      const resp = await axios.patch(
        `${process.env.BACKEND_SERVER}/dashboard/app-services`,
        { data: formState.selected },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("access_token"),
          },
        }
      );
      if (!resp.data.success) toast.error(`${resp.data.message}`);
      if (resp.data.success) toast.success(`${resp.data.message}`);
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }

  function inputHandlerFramedPool(input) {
    let copyData = { ...formState };
    copyData.selected.radgroupreply[framed_pool_id].value = input.value;
    setFormState(copyData);
  }

  function inputHandlerMikrotikRateLimit(input) {
    let copyData = { ...formState };
    copyData.selected.radgroupreply[mikrotikRateLimit_id].value = input.value;
    setFormState(copyData);
  }

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}

      <form id="modal-form">
        <input
          className="form-control mb-2"
          disabled
          value={formState.selected.service_name}
        />
        <InputForm
          id="service_ammount"
          label="Service Ammount"
          value={formState.selected.service_ammount}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="service_period"
          label="Service Period"
          value={formState.selected.service_period}
          type="number"
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="installation_fee"
          label="Installation fee"
          value={formState.selected?.installation_fee}
          onChange={(element) => inputHandler(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="framed_pool"
          label="Framed Pool"
          value={
            formState.selected.radgroupreply?.find(
              (f) => f.attribute === "Framed-Pool"
            ).value
          }
          onChange={(element) => inputHandlerFramedPool(element.currentTarget)}
        ></InputForm>

        <InputForm
          id="mikrotik_rate_limit"
          label="Rate Limit"
          value={
            data?.radgroupreply?.find(
              (f) => f.attribute === "Mikrotik-Rate-Limit"
            ).value
          }
          onChange={(element) =>
            inputHandlerMikrotikRateLimit(element.currentTarget)
          }
        ></InputForm>
      </form>
      <button className="btn btn-primary" onClick={submitHandler}>
        Save
      </button>
    </>
  );
}
