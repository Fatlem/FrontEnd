import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const StudentDashboard = () => {

  return (
    <div className="flex">
      <Sidebar userRole="Mahasiswa" />
      <div className="flex-1">
        <Header title="Dashboard Mahasiswa" />
        <div className="p-4">
          <p>Selamat datang di dashboard Mahasiswa!</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
