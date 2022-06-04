import { useStore } from "../../state/globalState";
import axios from "axios";
import { useState } from "react";

export default function EditUserForCustomer({ data }) {
  const [selectService, setSelectService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formData = useStore((state) => state.addSubsFormState);
  const setFormData = useStore((state) => state.setAddSubsFormState);

  function inputHandler(input) {
    let copyData = { ...data };
    copyData[input.id] = input.value;
    data[input.id] = copyData[input.id];
    setFormData(copyData);
  }

  return (
    <>
      <form id="modal-form">
        <div className="row">
          <div className="col-6">
            <label htmlFor="username" className="form-label">
              Username Customer portal & PPPoE
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="username"
              value={data.username}
              onChange={(element) => inputHandler(element.currentTarget)}
              readOnly
            />

            <label htmlFor="password" className="form-label">
              password Customer portal & PPPoE
            </label>
            <p>
              Silahkan Hubungi Customer Service untuk mengubah password PPPoE
            </p>
            <input
              type="text"
              className="form-control mb-3"
              id="value"
              value={data.value}
              onChange={(element) => inputHandler(element.currentTarget)}
              readOnly
            />

            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="first_name"
              value={data.first_name}
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="last_name"
              value={data.last_name}
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="email"
              value={data.email}
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
              value={data.phone}
              onChange={(element) => inputHandler(element.currentTarget)}
            />

            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="address"
              value={data.address}
              onChange={(element) => inputHandler(element.currentTarget)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
