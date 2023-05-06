import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { LoginPage } from "./Login";
import { RegisterPage } from "./Registration";
import { useAppSelector } from "../hooks";
import { PassPage } from "./PassedRegistration";
export const publicRoutes = createBrowserRouter(
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

// export const privateRoutes = createBrowserRouter(
//   [
//     {
//       path: "registration",
//       element: <PassPage />,
//     },
//   ],
//   {
//     basename: "/",
//   }
// );
