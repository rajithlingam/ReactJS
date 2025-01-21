import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  
  {
    path:"/",
    element:<Applayout />
  },{
    path:"/about",
    element:<Cart />
  },{
    path:"/offer",
    element:<Offer />
  },{
    path:"/account",
    element:<Account />
  },{
    path:"/about",
    element:<About />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
