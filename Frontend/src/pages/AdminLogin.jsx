// src/pages/AdminLogin.jsx
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import API from "../service/api.js";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // use context instead of props

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? "/admin/login"
      : "/admin/register";

    try {
      const { data } = await API.post(endpoint, form);
      if (isLogin) {
        localStorage.setItem("adminToken", data.token); // ✅ Critical line
        login(data.token); // set token globally
        navigate("/admin/dashboard");
      } else {
        alert("Admin registered successfully. Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          {isLogin ? "Admin Login" : "Admin Signup"}
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-yellow-600 hover:underline font-medium"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "Sign up here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
