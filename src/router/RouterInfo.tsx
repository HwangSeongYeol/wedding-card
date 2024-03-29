// import { Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import SuspenseView from "@src/molecules/Suspense";

const loadComponentWithDelay = <T extends () => Promise<{
  default: React.ComponentType
}>>(
  importFunc: T,
  delay: number = 250
): Promise<{ default: React.ComponentType }> => {
  return Promise.all([
    importFunc(),
    new Promise(resolve => setTimeout(resolve, delay))
  ]).then(([moduleExports]) => moduleExports);
};

const Template = lazy(() => loadComponentWithDelay(() => import('@src/Template')));
const Home = lazy(() => loadComponentWithDelay(() => import("@src/pages/Home")));
const Photos = lazy(() => loadComponentWithDelay(() => import("@src/pages/Photos")));
const Directions = lazy(() => loadComponentWithDelay(() => import("@src/pages/Directions")));
const Wishes = lazy(() => loadComponentWithDelay(() => import("@src/pages/Wishes")));

const Pages = () => {
  return <div>
    <div id="home"><Home /></div>
    <div id="photos"><Photos /></div>
    <div id="directions"><Directions /></div>
    <div id="wishes"><Wishes /></div>
  </div>
}

const RouterInfo = [
  {
    path: "/",
    element: (
      <Suspense fallback={<SuspenseView />}>
        <Template />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Pages />,
      }
      // {
      //   path: "/",
      //   element: <Navigate to="home" />,
      // },
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "/photos",
      //   element: <Photos />,
      // },
      // {
      //   path: "/directions",
      //   element: <Directions />,
      // },
      // {
      //   path: "/wishes",
      //   element: <Wishes />,
      // },
      // {
      //   path: "*",
      //   element: <Navigate to="home" />,
      // },
    ]
  },

];

export default RouterInfo;
