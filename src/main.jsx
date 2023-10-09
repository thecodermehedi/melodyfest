import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import "./assets/css/index.css";
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProvider from "./context/AuthProvider";
import ServiceProvider from "./context/ServiceProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ServiceProvider>
        <HelmetProvider>
          <RouterProvider router={routes} />
        </HelmetProvider>
      </ServiceProvider>
    </AuthProvider>
  </React.StrictMode>
);
