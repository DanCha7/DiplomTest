import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Layout from "../components/Layout";
import ProductPage from "../Pages/ProductPage";
import { TotalPage } from "../Pages/TotalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/products/:id", element: <ProductPage /> },
      { path: "/total", element: <TotalPage />},

    ],
  },
]);

export default router;
