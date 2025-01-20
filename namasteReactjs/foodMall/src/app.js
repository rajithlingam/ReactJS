import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserROuter} from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserROuter([
  {
    path:"/",
    element: <Applayout />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
