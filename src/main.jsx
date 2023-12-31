import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ProjectPage from "./pages/ProjectsPage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: "portfolio",
        element: <ProjectPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
