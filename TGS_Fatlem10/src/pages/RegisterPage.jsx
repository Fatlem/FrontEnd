import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setResponseMessage("");

    try {
      const response = await axios.post(
        "http://demo-api.syaifur.io/api/register",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.code === 201) {
        setResponseMessage(response.data.message);
        setForm({
          name: "",
          email: "",
          password: "",
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Register successfully",
        }).then(() => {
          navigate("/");
        });
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Server error occurred");
      } else {
        setErrorMessage("No connection. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl text-purple-500 font-bold text-center">
          Register
        </h1>

        {responseMessage && (
          <div className="bg-green-200 p-4 rounded-lg text-green-700 text-center font-medium">
            {responseMessage}
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-200 p-4 rounded-lg text-red-700 text-center font-medium">
            {errorMessage}
          </div>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-purple-500 font-bold" htmlFor="name">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={handleChange}
              name="name"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-purple-500 font-bold" htmlFor="email">
              Email
            </label>
            <input
              required
              value={form.email}
              onChange={handleChange}
              name="email"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-purple-500 font-bold" htmlFor="password">
              Password
            </label>
            <input
              required
              value={form.password}
              onChange={handleChange}
              name="password"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className={`w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-all duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
