import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Biodatas from "../Pages/Biodata/Biodatas";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import SingleBioData from "../Pages/SingleBioData/SingleBioData";
import PrivateRoute from "./PrivateRoute";

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
        loader: ({params}) => fetch(`http://localhost:5000/biodata/${params.id}`)
      },
    ],
  },
]);
export default Router;
