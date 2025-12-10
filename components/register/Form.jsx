"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/features/api/api";

const Form = () => {
  const router = useRouter();
  const [registerUser, { isLoading, isError, error }] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept the Terms and Privacy Policy.");
      return;
    }

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const response = await registerUser(payload).unwrap();

      // ✅ Save token if returned
      if (response.token) localStorage.setItem("token", response.token);

      alert("Registration successful! Redirecting to login...");
      router.push("/login");
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>

      {/* Username */}
      <div className="form-group input-group">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="User Name"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="form-group input-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>

      {/* Password */}
      <div className="form-group input-group">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="form-group input-group">
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-control"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" htmlFor="terms">
          I have read and accept the Terms and Privacy Policy
        </label>
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-log w-100 btn-thm" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>

      {/* Error Handling */}
      {isError && (
        <p className="text-danger text-center mt-3">
          ❌ {error?.data?.message || "Registration failed. Try again."}
        </p>
      )}

      {/* Divider */}
      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>

      {/* Social Buttons */}
      <div className="row mt25">
        <div className="col-lg-6">
          <button type="button" className="btn btn-block color-white bgc-fb w-100">
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>

        <div className="col-lg-6">
          <button type="button" className="btn btn-block color-white bgc-gogle w-100">
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
