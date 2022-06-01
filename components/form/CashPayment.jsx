import InputForm from "./Input";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

export default function CashPayment({ data }) {
  const [formState, setFormState] = useState();

  function inputHandler(input) {
    let copyFormState = { ...formState };
    copyFormState[input.id] = input.value;
    setFormState(copyFormState);
  }

  const access_token = localStorage.getItem("access_token");
  const decoded = jwt_decode(access_token);

  async function onBayar() {
    try {
      const resp = await axios.post(
        `${process.env.BACKEND_SERVER}/dashboard/cash-payment`,
        {
          data: {
            merchant_id: decoded.username,
            customer_id: data.id,
            gross_amount: data.app_service.service_ammount,
          },
        },
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

  return (
    <>
      <h5>
        Admin Name: {decoded.username} / {decoded.email}
      </h5>
      <h5>
        Pembayaran untuk customer {data.first_name} {data.last_name}
      </h5>
      <h5>Tagihan: {data.app_service.service_ammount}</h5>
      <InputForm
        id="bayar"
        label="Uang yang dibayarkan"
        type="number"
        onChange={(c) => inputHandler(c.currentTarget)}
      ></InputForm>
      <h3>Kembalian: {formState?.bayar - data.app_service.service_ammount}</h3>
      <button className="btn" onClick={onBayar}>
        Bayar
      </button>
    </>
  );
}
