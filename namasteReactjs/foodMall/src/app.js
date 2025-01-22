import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Error from "./components/Error";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Cart from "./components/Cart";
import Offer from "./components/Offer";
import Account from "./components/Account";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Legal from "./components/Legal";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body />,
        errorElement: <Error />,
      },
      {
        path: "/Cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/Offer",
        element: <Offer />,
        errorElement: <Error />,
      },
      {
        path: "/Account",
        element: <Account />,
        errorElement: <Error />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: "/Career",
        element: <Career />,
        errorElement: <Error />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/Social",
        element: <Social />,
        errorElement: <Error />,
      },
      {
        path: "Legal",
        element: <Legal />,
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
