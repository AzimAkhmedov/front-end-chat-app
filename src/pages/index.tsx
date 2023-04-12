import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { LoginPage } from "./Login";
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
  ],
  {
    basename: "/",
  }
);
