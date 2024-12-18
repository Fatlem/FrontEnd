import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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

    try {
      const response = await axios.post(
        "http://demo-api.syaifur.io/api/login",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.code === 200) {
        setResponseMessage(response.data.message);
        setForm({
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
          title: "Signed in successfully",
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        setErrorMessage("Login failed. Please try again.");
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="mt-3 w-1/3 p-10 rounded-3xl bg-white shadow-xl flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl text-purple-600 font-extrabold">Login</h1>

        {responseMessage && (
          <div className="bg-green-200 p-3 rounded-xl text-green-700 font-semibold">
            {responseMessage}
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-200 p-3 rounded-xl text-red-700 font-semibold">
            {errorMessage}
          </div>
        )}

        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center gap-2">
            <label className="font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              required
              value={form.email}
              onChange={handleChange}
              name="email"
              className="px-4 py-2 w-full rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-300 border border-gray-300 outline-none transition duration-200"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="font-semibold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              required
              value={form.password}
              onChange={handleChange}
              name="password"
              className="px-4 py-2 w-full rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-300 border border-gray-300 outline-none transition duration-200"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className={`bg-purple-500 w-full px-4 py-3 rounded-xl text-white font-bold hover:bg-purple-600 transition-all duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
