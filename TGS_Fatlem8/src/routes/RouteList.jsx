import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/auth/Register";
import AdminLayout from "../layouts/Admin";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/AdminDashboard";
import Mahasiswa from "../pages/admin/MahasiswaDashboard";

const RouteList = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "mahasiswa",
        element: <Mahasiswa />,
      },
    ],
  },
]);

export default RouteList;
