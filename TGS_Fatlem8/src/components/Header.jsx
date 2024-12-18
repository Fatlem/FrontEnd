import React from "react";

const Header = ({ title }) => {
  return (
    <div className="bg-gray-100 border-b p-4">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
