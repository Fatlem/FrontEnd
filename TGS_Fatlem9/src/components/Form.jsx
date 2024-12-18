import React, { useState } from 'react';
import axiosInstance from '../axios/axiosInstance';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
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
      const response = await axiosInstance.post('/posts', formData);
      setSubmittedData((prevData) => [...prevData, response.data]);
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderPost = () => {
    return submittedData.map((data, index) => (
      <div key={index} className="overflow-x-auto mb-4">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium">ID</th>
              <th className="px-6 py-3 text-left font-medium">Title</th>
              <th className="px-6 py-3 text-left font-medium">Body</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">{data.id}</td>
              <td className="px-6 py-4 border-b border-gray-200">{data.title}</td>
              <td className="px-6 py-4 border-b border-gray-200">{data.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Input Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {renderPost()}
      </div>
    </div>
  );
};

export default Form;
