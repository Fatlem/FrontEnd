import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="flex flex-col items-center gap-4">
        <img
          className="sm:w-150" src="./src/assets/404.png" alt="404"/>       
      </div>
    </div>
  );
};

export default NotFoundPage;
