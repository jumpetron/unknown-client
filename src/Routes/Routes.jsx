import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import AddProduct from "../pages/AddProduct/AddProduct";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import { MyCart } from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import Shop from "../pages/Shop/Shop";
import { ShowProductByName } from "../pages/ShowProductByName/ShowProductByName";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        ),
      },
      {
        path: "/:brandName",
        element: (
          <PrivateRoute>
            <ShowProductByName />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://unknown-server-rho.vercel.app/${params.brandName}`),
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`https://unknown-server-rho.vercel.app/product/${params.id}`),
        element: (
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://unknown-server-rho.vercel.app/product/update/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
