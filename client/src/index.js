import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import Root from "./pages/Root";
import Home from "./pages/Home";
import UserRegistration from "./pages/UserRegistration";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import CompanyProfile from "./pages/CompanyProfile";
import UserCompanies from "./pages/UserCompanies";
import CreateCompany from "./pages/CreateCompany";
import AllCompanies from "./pages/AllCompanies";
import AllUsers from "./pages/AllUsers";
import AdminProfile from "./pages/AdminProfile";
import UserIdProfile from "./pages/UserIdProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <UserRegistration />,
      },
      {
        path: "signin",
        element: <Login />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "all_users",
        element: <AllUsers />,
      },
      {
        path: "all_users/:userId",
        element: <UserIdProfile />,
      },
      {
        path: "admin_profile",
        element: <AdminProfile />,
      },

      {
        path: "all_companies",
        element: <AllCompanies />,
      },
      {
        path: "all_companies/:companyId",
        element: <CompanyProfile />,
      },
      {
        path: "companies",
        element: <UserCompanies />,
      },
      {
        path: "companies/:companyId",
        element: <CompanyProfile />,
      },
      {
        path: "create_company",
        element: <CreateCompany />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
