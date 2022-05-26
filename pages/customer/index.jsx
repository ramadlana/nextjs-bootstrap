import { useState, useRef } from "react";
const axios = require("axios");
import Router from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const clickHandler = async () => {
    setLoading(true);
    try {
      const resp = await axios({
        method: "POST",
        url: `${process.env.BACKEND_SERVER}/customer/login`,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("access_token"),
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
      Router.replace("/customer/me");
    } catch (err) {
      setLoading(false);
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
      <ToastContainer />
      <div className="container">
        <div className="page page-center">
          <div className="container-tight py-4">
            <div className="text-center mb-4">
              <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-0">
                <a href=".">
                  <Image
                    src="/static/logo-small.svg"
                    width={110}
                    height={32}
                    alt="Tabler"
                    className="navbar-brand-image"
                  />
                </a>
                <span className="">Customer Portal</span>
              </h1>
            </div>
            <form
              className="card card-md"
              action="."
              method="get"
              autoComplete="off"
            >
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  Login to your account
                </h2>
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
                <div className="mb-2">
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">
                      Remember me on this device
                    </span>
                  </label>
                </div>
                <div className="form-footer">{buttonLoading}</div>
              </div>
              <div className="hr-text">or</div>
              <div className="card-body">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => Router.push("/user/register")}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
