import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-6">
      <h2 className="text-3xl font-bold mb-4"> Dashboard</h2>
      <ul className="space-y-2">
        <li className="font-bold text-xl">Home</li>
        <li className="font-bold text-xl">About</li>
        <li className="font-bold text-xl">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
