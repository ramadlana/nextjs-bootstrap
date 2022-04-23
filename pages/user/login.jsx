import { useState, useRef } from "react";
const axios = require("axios");
import Router from "next/router";
import Navbar from "../../components/Navbar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const clickHandler = async () => {
    setLoading(true);
    try {
      const resp = await axios({
        method: "POST",
        url: `${process.env.BACKEND_SERVER}/sign/in`,
        headers: {
          "Content-Type": "application/json",
          "x-access_token": localStorage.getItem("access_token"),
        },
        data: {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        },
      });
      setLoading(false);

      // save token into localstorage
      localStorage.setItem("access_token", resp.data.access_token);
      toast.success(resp.data.message);
      // Redirecr to Dashboard
      Router.replace("/dashboard");
    } catch (err) {
      setLoading(false);
      console.log(err.response);
      toast.error(
        err.response.data.message
          ? err.response.data.message
          : "error when authenticating to server"
      );
    }
  };

  const buttonLoading = loading ? (
    <button className="btn btn-primary w-100" onClick={clickHandler} disabled>
      <span
        className="spinner-border spinner-border-sm me-3 "
        role="status"
        aria-hidden="true"
      />
      Sign in
    </button>
  ) : (
    <button className="btn btn-primary w-100" onClick={clickHandler}>
      Sign in
    </button>
  );
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col 8">Please Login to access</div>
          <div className="col-4">
            <div className="mb-3">
              <label className="form-label">username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                ref={usernameRef}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <div className="input-group input-group-flat">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="off"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>

            <div>{buttonLoading}</div>
            <p className="text-center mt-2">or Register here.</p>
            <button
              className="btn btn-primary w-100"
              onClick={() => Router.push("/user/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
