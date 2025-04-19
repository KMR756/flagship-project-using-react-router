import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
