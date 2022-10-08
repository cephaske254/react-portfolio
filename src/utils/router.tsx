import { createBrowserRouter } from "react-router-dom";
import CustomAppBar from "../components/AppBar";
import About from "../pages/About";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomAppBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
