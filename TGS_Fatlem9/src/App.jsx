import React from "react";
import { UseFetchData } from "./hooks/useFetchData";
import Form from "./components/Form";

const App = () => {
  const { posts } = UseFetchData();

  const renderData = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium">ID</th>
              <th className="px-6 py-3 text-left font-medium">Title</th>
              <th className="px-6 py-3 text-left font-medium">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border-b border-gray-200">{data.id}</td>
                <td className="px-6 py-4 border-b border-gray-200">{data.title}</td>
                <td className="px-6 py-4 border-b border-gray-200">{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      {renderData()}
      <Form />
    </div>
  );
};

export default App;
