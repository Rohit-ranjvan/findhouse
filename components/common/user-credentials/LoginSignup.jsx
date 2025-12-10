"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "@/features/api/api";

const LoginSignup = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");

  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
    termsAccepted: false,
  });

  const [registerUser, { isLoading: regLoading }] = useRegisterUserMutation();
  const [loginUser, { isLoading: logLoading }] = useLoginUserMutation();

  const updateForm = (e, type) => {
    const { name, value, checked, type: inputType } = e.target;

    type === "login"
      ? setLoginData({ ...loginData, [name]: value })
      : setRegisterData({
          ...registerData,
          [name]: inputType === "checkbox" ? checked : value,
        });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.usernameOrEmail || !loginData.password) {
      toast.error("Please enter all fields!");
      return;
    }

    try {
      const res = await loginUser(loginData).unwrap();

      toast.success("Login successful!");
      if (res.token) localStorage.setItem("token", res.token);

      router.push("/my-dashboard");

      setLoginData({ usernameOrEmail: "", password: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Invalid credentials!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.termsAccepted) {
      toast.error("Please accept terms.");
      return;
    }

    if (registerData.password !== registerData.rePassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await registerUser({
        name: registerData.name,
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      }).unwrap();

      toast.success("Registration successful!");
      setRegisterData({
        name: "",
        username: "",
        email: "",
        password: "",
        rePassword: "",
        termsAccepted: false,
      });

      setActiveTab("login");
    } catch (err) {
      toast.error(err?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
        ></button>
      </div>
      {/* End .modal-header */}

      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </a>
              </li>
              {/* End login tab */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </a>
              </li>
              {/* End Register tab */}
            </ul>
            {/* End .sign_up_tab */}
          </div>
        </div>
        {/* End .row */}

        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                <Image
                  width={357}
                  height={494}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/login.jpg"
                  alt="login.jpg"
                />
              </div>
            </div>
            {/* End col */}

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form onSubmit={handleLogin}>
                  <div className="heading">
                    <h4>Login</h4>
                  </div>
                  {/* End heading */}

                  <div className="row mt25">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div>
                  {/* End .row */}

                  <hr />

                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      name="usernameOrEmail"
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      value={loginData.usernameOrEmail}
                      onChange={(e) => updateForm(e, "login")}
                      placeholder="User Name or Email"
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="input-group form-group">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) => updateForm(e, "login")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      name="rememberMe"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remeberMe"
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="remeberMe"
                    >
                      Remember me
                    </label>

                    <a className="btn-fpswd float-end" href="#">
                      Lost your password?
                    </a>
                  </div>
                  {/* End remember me checkbox */}

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                    {logLoading ? "Logging in..." : "Log In"}
                  </button>
                  {/* End submit button */}

                  <p className="text-center">
                    Dont have an account?{" "}
                    <a className="text-thm" href="#" onClick={() => setActiveTab("register")}>
                      Register
                    </a>
                  </p>
                </form>
              </div>
              {/* End .col .login_form */}
            </div>
          </div>
          {/* End .tab-pane */}

          <div
            className="row mt25 tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="regstr_thumb">
                <Image
                  width={357}
                  height={659}
                  className="img-fluid w100 h-100 cover"
                  src="/assets/images/resource/regstr.jpg"
                  alt="regstr.jpg"
                />
              </div>
            </div>
            {/* End . left side image for register */}

            <div className="col-lg-6 col-xl-6">
              <div className="sign_up_form">
                <div className="heading">
                  <h4>Register</h4>
                </div>
                {/* End .heading */}

                <form onSubmit={handleRegister}>
                  <div className="row ">
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-fb w-100">
                        <i className="fa fa-facebook float-start mt5"></i> Login
                        with Facebook
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-googl w-100">
                        <i className="fa fa-google float-start mt5"></i> Login
                        with Google
                      </button>
                    </div>
                  </div>
                  {/* End .row */}

                  <hr />

                  <div className="form-group input-group mb-3">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Name"
                      value={registerData.name}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-group input-group mb-3">
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="User Name"
                      value={registerData.username}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Email"
                      value={registerData.email}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      placeholder="Password"
                      value={registerData.password}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      name="rePassword"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword3"
                      placeholder="Re-enter password"
                      value={registerData.rePassword}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  {/* <div className="form-group ui_kit_select_search mb-3">
                    <select
                      className="form-select"
                      data-live-search="true"
                      data-width="100%"
                    >
                      <option data-tokens="SelectRole">Single User</option>
                      <option data-tokens="Agent/Agency">Agent</option>
                      <option data-tokens="SingleUser">Multi User</option>
                    </select>
                  </div> */}
                  {/* End from-group */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      name="termsAccepted"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms"
                      checked={registerData.termsAccepted}
                      onChange={(e) => updateForm(e, "register")}
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="terms"
                    >
                      I have accept the Terms and Privacy Policy.
                    </label>
                  </div>
                  {/* End from-group */}

                  <button type="submit" className="btn btn-log w-100 btn-thm">
                     {regLoading ? "Registering..." : "Sign Up"}
                  </button>
                  {/* End btn */}

                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="text-thm" href="#" onClick={() => setActiveTab("login")}>
                      Log In
                    </a>
                  </p>
                </form>
                {/* End .form */}
              </div>
            </div>
            {/* End register content */}
          </div>
          {/* End .tab-pane */}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;