import { useStore } from "../../state/globalState";
import axios from "axios";
import { useState } from "react";
import dayjs from "dayjs";

export default function PaymentHistory({ data }) {
  const [selectService, setSelectService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const payment_history = useStore((state) => state.payment_history);
  const setFormData = useStore((state) => state.setAddSubsFormState);

  function inputHandler(input) {
    let copyData = { ...data };
    copyData[input.id] = input.value;
    data[input.id] = copyData[input.id];
    if (input["id"] === "services_id")
      copyData["radusergroup"]["groupname"] = input.value;
    setFormData(copyData);
  }

  if (payment_history.length === 0)
    return (
      <div className="card">
        <ul className="list-group list-group-flush placeholder-glow">
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="avatar avatar-rounded placeholder" />
              </div>
              <div className="col-7">
                <div className="placeholder placeholder-xs col-9" />
                <div className="placeholder placeholder-xs col-7" />
              </div>
              <div className="col-2 ms-auto text-end">
                <div className="placeholder placeholder-xs col-8" />
                <div className="placeholder placeholder-xs col-10" />
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="avatar avatar-rounded placeholder" />
              </div>
              <div className="col-7">
                <div className="placeholder placeholder-xs col-9" />
                <div className="placeholder placeholder-xs col-7" />
              </div>
              <div className="col-2 ms-auto text-end">
                <div className="placeholder placeholder-xs col-8" />
                <div className="placeholder placeholder-xs col-10" />
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="avatar avatar-rounded placeholder" />
              </div>
              <div className="col-7">
                <div className="placeholder placeholder-xs col-9" />
                <div className="placeholder placeholder-xs col-7" />
              </div>
              <div className="col-2 ms-auto text-end">
                <div className="placeholder placeholder-xs col-8" />
                <div className="placeholder placeholder-xs col-10" />
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <div className="avatar avatar-rounded placeholder" />
              </div>
              <div className="col-7">
                <div className="placeholder placeholder-xs col-9" />
                <div className="placeholder placeholder-xs col-7" />
              </div>
              <div className="col-2 ms-auto text-end">
                <div className="placeholder placeholder-xs col-8" />
                <div className="placeholder placeholder-xs col-10" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );

  return (
    <>
      <div className="table-responsive">
        <table className="table table-vcenter">
          <thead>
            <tr>
              <td>Order ID</td>
              <td>Status</td>
              <td>Ammount</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {payment_history.map((item) => {
              return (
                <tr key={item.order_id}>
                  <td>{item.order_id}</td>

                  <td>{item.transaction_status}</td>
                  <td>{item.gross_amount}</td>
                  <td>
                    {dayjs(item.transaction_time).format(
                      "DD-MM-YYYY HH:mm:ss WIB"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
