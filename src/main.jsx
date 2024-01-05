import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import ProductProvider from "./ProductProvider/ProductProvider";
import { router } from "./Routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </ProductProvider>
  </AuthProvider>
);
