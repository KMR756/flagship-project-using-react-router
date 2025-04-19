import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "cart",
        Component: Cart,
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
