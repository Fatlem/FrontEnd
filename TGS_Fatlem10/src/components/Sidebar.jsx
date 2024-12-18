import React from "react";

const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-gray-800 text-white flex flex-col rounded-xl shadow-lg">
      <div className="p-5 bg-purple-500 rounded-t-xl">
        <h1 className="text-3xl font-bold">Data Axios</h1>
      </div>
      <nav className="flex flex-col gap-4 px-4 py-5 bg-gray-700 rounded-b-xl">
        <a
          href="#"
          className="hover:bg-purple-500 px-4 py-2 rounded-md transition">
          Dashboard
        </a>
        <a
          href="#"
          className="hover:bg-purple-500 px-4 py-2 rounded-md transition">
          Data
        </a>
        <a
          href="#"
          className="hover:bg-purple-500 px-4 py-2 rounded-md transition">
          Settings
        </a>
        <a
          href="#"
          className="hover:bg-purple-500 px-4 py-2 rounded-md transition">
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
