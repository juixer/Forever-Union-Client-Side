import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Biodatas from "../Pages/Biodata/Biodatas";

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
    ],
  },
]);
export default Router;
