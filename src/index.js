import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  { path: "/home", element: "Home" },
  { path: "/userManagement", element: "UserManagement" },
  { path: "/productManagement", element: "ProductManagement" },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main>
      <RouterProvider router={router} />
    </Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
