import Template from "@/Template";
import Directions from "@/pages/Directions";
import Home from "@/pages/Home";
import Photos from "@/pages/Photos";
import Wishes from "@/pages/Wishes";
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
