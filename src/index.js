import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORRY</h1>,
  },

  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
