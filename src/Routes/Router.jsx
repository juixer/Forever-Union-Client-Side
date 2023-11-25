import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Biodatas from "../Pages/Biodata/Biodatas";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import SingleBioData from "../Pages/SingleBioData/SingleBioData";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Home/Dashboard/Dashboard";
import EditBioData from "../Pages/userDashboard/EditBioData/EditBioData";
import VIewBioData from "../Pages/userDashboard/ViewBioData/VIewBioData";
import FavBioData from "../Pages/userDashboard/FavBioData/FavBioData";
import AdminDashBoard from "../Pages/AdminDashBoard/AdminDashBoard";
import DashHome from "../Pages/Home/Dashboard/DashHome";
import ManageUser from "../Pages/AdminDashBoard/ManageUser/ManageUser";
import ApprovePremium from "../Pages/AdminDashBoard/Approve Premium/ApprovePremium";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bioDatas",
        element: <Biodatas />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bioDetails/:id",
        element: (
          <PrivateRoute>
            <SingleBioData />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/",
        element: (
          <PrivateRoute>
            <DashHome />
          </PrivateRoute>
        ),
      },
      // admi
      {
        path: "/dashboard/adminDashboard",
        element: (
          <PrivateRoute>
            <AdminDashBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage",
        element: (
          <PrivateRoute>
            <ManageUser />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/approvedPremium",
        element: (
          <PrivateRoute>
            <ApprovePremium />
          </PrivateRoute>
        ),
      },

      // user
      {
        path: "/dashboard/editBioData",
        element: (
          <PrivateRoute>
            <EditBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/viewBioData",
        element: (
          <PrivateRoute>
            <VIewBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/favoritesBiodata",
        element: (
          <PrivateRoute>
            <FavBioData />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default Router;
