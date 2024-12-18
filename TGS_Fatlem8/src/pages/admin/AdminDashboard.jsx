import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const AdminDashboard = () => {

  return (
    <div className="flex">
      <Sidebar userRole="Admin"/>
      <div className="flex-1">
        <Header title="Dashboard Admin" />
        <div className="p-4">
          <p>Selamat datang di dashboard Admin!</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
