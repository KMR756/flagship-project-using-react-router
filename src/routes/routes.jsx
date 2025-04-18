import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Favorites from "../pages/Favorites/Favorites";
import MainLayout from "../layouts/MainLayout/MainLayout";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import Error from "../pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
      {
        path: "phone-details",
        Component: PhoneDetails,
      },
    ],
  },
]);
