import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
]);

export default router;
