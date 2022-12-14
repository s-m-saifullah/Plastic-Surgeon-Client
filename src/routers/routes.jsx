import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import AddServices from "../pages/AddServices/AddServices";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MyReviews from "../pages/MyReviews/MyReviews";
import EditReview from "../pages/MyReviews/EditReview";
import PrivateRoute from "./PrivateRouter";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://plastic-surgeon-server.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://plastic-surgeon-server.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://plastic-surgeon-server.vercel.app/reviewById/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
