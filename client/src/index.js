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
import UserProfile from "./pages/UserProfile/UserProfile";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import UserCompanies from "./pages/UserCompanies";
import CreateCompany from "./pages/CreateCompany";
import AllCompanies from "./pages/AllCompanies";
import AllUsers from "./pages/AllUsers";
import AdminProfile from "./pages/AdminProfile";
import UserIdProfile from "./pages/UserIdProfile/UserIdProfile";
import NotFound from "./pages/NotFound";
import RequireAuth from "./hoc/RequireAuth";
import RequireAdminRole from "./hoc/RequireAdminRole";

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
        element: (
          <RequireAuth>
            <UserProfile />
          </RequireAuth>
        ),
      },
      {
        path: "companies",
        element: (
          <RequireAuth>
            <UserCompanies />
          </RequireAuth>
        ),
      },
      {
        path: "companies/:companyId",
        element: (
          <RequireAuth>
            <CompanyProfile />
          </RequireAuth>
        ),
      },
      {
        path: "create-company",
        element: (
          <RequireAuth>
            <CreateCompany />
          </RequireAuth>
        ),
      },
      {
        path: "/admin/all-users",
        element: (
          <RequireAdminRole>
            <AllUsers />
          </RequireAdminRole>
        ),
      },
      {
        path: "/admin/all-users/:userId",
        element: (
          <RequireAdminRole>
            <UserIdProfile />
          </RequireAdminRole>
        ),
      },
      {
        path: "/admin/admin-profile",
        element: (
          <RequireAdminRole>
            <AdminProfile />
          </RequireAdminRole>
        ),
      },

      {
        path: "/admin/all-companies",
        element: (
          <RequireAdminRole>
            <AllCompanies />
          </RequireAdminRole>
        ),
      },
      {
        path: "admin/all-companies/:companyId",
        element: (
          <RequireAdminRole>
            <CompanyProfile />
          </RequireAdminRole>
        ),
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
