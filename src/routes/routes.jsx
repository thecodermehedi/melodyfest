import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import ServicesPage from "../pages/Services/ServicesPage";
import VIP from "../pages/VIP/VIP";
import Events from "./../pages/Events/Events";
import AboutUs from "../pages/About/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events />
          </PrivateRoute>
        ),
      },
      {
        path: "/vip-experiences",
        element: (
          <PrivateRoute>
            <VIP />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
