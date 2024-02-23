import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import './index.css'
import RouterInfo from './router/RouterInfo.tsx';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
const router = createHashRouter(RouterInfo, { basename: "/" });

root.render(
  <RouterProvider router={router} />
)
