import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { LoginPage } from "./Login";
import { RegisterPage } from "./Registration";
export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <RegisterPage />,
      path: "registration",
    },
  ],
  {
    basename: "/",
  }
);
