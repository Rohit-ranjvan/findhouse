"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/features/api/api";

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  // -------------------- HANDLE INPUT --------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------------------- HANDLE SUBMIT --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email: formData.usernameOrEmail,
        password: formData.password,
      };

      // CALL API
      const response = await loginUser(payload).unwrap();
      console.log("🔥 FULL LOGIN RESPONSE => ", response);

      // Correct token detection (support all possible keys)
      const token =
        response?.accessToken ||
        response?.token ||
        response?.jwt ||
        response?.data?.token ||
        null;

      console.log("🎯 DETECTED TOKEN => ", token);

      if (!token) {
        alert("❌ Token missing in API response");
        return;
      }

      // Save token in localStorage
      localStorage.setItem("token", token);

      console.log(
        "💾 TOKEN SAVED IN LOCALSTORAGE =>",
        localStorage.getItem("newwtoken")
      );

      // small delay so Next.js does not read early
      await new Promise((res) => setTimeout(res, 150));

      router.push("/listing-grid-v1");
    } catch (err) {
      console.error("❌ Login failed:", err);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Don’t have an account?
          <Link href="/register" className="text-thm">
            Sign Up!
          </Link>
        </p>
      </div>

      {/* USERNAME / EMAIL */}
      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          name="usernameOrEmail"
          placeholder="User Name Or Email"
          value={formData.usernameOrEmail}
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>

      {/* PASSWORD */}
      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>

      <div className="form-group form-check custom-checkbox mb-3">
        <input className="form-check-input" type="checkbox" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="btn btn-log w-100 btn-thm"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Log In"}
      </button>

      {/* ERROR MESSAGE */}
      {isError && (
        <p className="text-danger text-center mt-2">
          {error?.data?.message || "Login failed. Try again."}
        </p>
      )}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>

      {/* SOCIAL LOGIN */}
      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="button"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        <div className="col-lg-6">
          <button
            type="button"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
