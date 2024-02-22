import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import RouterInfo from './router/RouterInfo.tsx';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
const router = createBrowserRouter(RouterInfo, { basename: "/wedding-card" });

root.render(
  <RouterProvider router={router} />
)
