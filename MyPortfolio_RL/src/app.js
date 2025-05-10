import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Body from "./components/Body";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
