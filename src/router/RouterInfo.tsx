import Template from "@src/Template";
import Directions from "@src/pages/Directions";
import Home from "@src/pages/Home";
import Photos from "@src/pages/Photos";
import Wishes from "@src/pages/Wishes";
import { Navigate } from "react-router-dom";


const RouterInfo = [
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/directions",
        element: <Directions />,
      },
      {
        path: "/wishes",
        element: <Wishes />,
      },
      {
        path: "*",
        element: <Navigate to="home" />,
      },
    ]
  },

];

export default RouterInfo;
