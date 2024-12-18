import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-gray-50 shadow-md rounded-md mb-5">
      <div className="flex justify-between items-center bg-purple-500 p-4 rounded-md text-white">
        <h1 className="text-2xl font-bold">Welcome!</h1>
        <div>
          <p className="text-xl font-semibold">Data</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
