import { useState, useRef } from "react";
const axios = require("axios");
import Router from "next/router";
import Navbar from "../../components/Navbar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [apiReturn, setapiReturn] = useState(null);
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const clickHandler = async () => {
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      setLoading(true);
      try {
        const resp = await axios({
          method: "POST",
          url: `${process.env.BACKEND_SERVER}/sign/up`,
          headers: {
            "Content-Type": "application/json",
            "x-access_token": localStorage.getItem("access_token"),
          },
          data: {
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          },
        });
        setLoading(false);
        toast.success(resp.data.message);
        Router.replace("/dashboard");
      } catch (err) {
        setLoading(false);
        console.log(err.response);
        toast.error(
          err.response.data.error
            ? err.response.data.error
            : "error when authenticating to server"
        );
      }
    } else toast.error("password and password confirmation not match");
  };

  const buttonLoading = loading ? (
    <button className="btn btn-primary w-100" onClick={clickHandler} disabled>
      <span
        className="spinner-border spinner-border-sm me-3 "
        role="status"
        aria-hidden="true"
      />
      Register
    </button>
  ) : (
    <button className="btn btn-primary w-100" onClick={clickHandler}>
      Register
    </button>
  );
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="page page-center">
          <div className="container-tight py-4">
            <div className="text-center mb-4">
              <a href=".">
                <img src="/static/logo.svg" height={36} alt />
              </a>
            </div>
            <form
              className="card card-md"
              action="."
              method="get"
              autoComplete="off"
            >
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  Create new account
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
                <div className="mb-3">
                  <label className="form-label">email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="mb-3">
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

                <div className="mb-3">
                  <label className="form-label">Re enter Password</label>
                  <div className="input-group input-group-flat">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="re enter password"
                      autoComplete="off"
                      ref={passwordConfirmRef}
                      required
                    />
                  </div>
                </div>

                <div className="form-footer">{buttonLoading}</div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col 8">Register</div>
          <div className="col-4">
            <div>{buttonLoading}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
