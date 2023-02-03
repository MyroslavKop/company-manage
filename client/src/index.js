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
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import UserCompanies from "./pages/UserCompanies";
import CreateCompany from "./pages/CreateCompany";
import AllCompanies from "./pages/AllCompanies";
import AllUsers from "./pages/AllUsers";
import AdminProfile from "./pages/AdminProfile";
import UserIdProfile from "./pages/UserIdProfile/UserIdProfile";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        path: "companies",
        element: <UserCompanies />,
      },
      {
        path: "companies/:companyId",
        element: <CompanyProfile />,
      },
      {
        path: "create-company",
        element: <CreateCompany />,
      },
      {
        path: "/admin/all-users",
        element: <AllUsers />,
      },
      {
        path: "/admin/all-users/:userId",
        element: <UserIdProfile />,
      },
      {
        path: "/admin/admin-profile",
        element: <AdminProfile />,
      },

      {
        path: "/admin/all-companies",
        element: <AllCompanies />,
      },
      {
        path: "admin/all-companies/:companyId",
        element: <CompanyProfile />,
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
