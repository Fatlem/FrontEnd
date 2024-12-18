import React, { useState } from "react";
import axiosInstance from "../axios/axiosInstance";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/posts", formData);
      setSubmittedData([...submittedData, response.data]);
      setFormData({ name: "", title: "" });
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="max-w-lg w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Input Data
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 rounded-md hover:bg-green-600 transition">
            Submit
          </button>
        </form>
      </div>

      {submittedData.length > 0 && (
        <div className="mt-8 max-w-4xl w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700 border-collapse bg-white shadow-md rounded-md">
              <thead className="border-b border-gray-300 bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">ID</th>
                  <th className="px-6 py-3 text-left font-medium">Title</th>
                  <th className="px-6 py-3 text-left font-medium">Body</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition`}>
                    <td className="px-6 py-4">{data.id}</td>
                    <td className="px-6 py-4">{data.title}</td>
                    <td className="px-6 py-4">{data.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
