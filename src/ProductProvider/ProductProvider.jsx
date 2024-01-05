import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  const url = `https://unknown-server-rho.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch("https://unknown-server-rho.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, [url, cart]);

  const handleCart = (id, name, price, image) => {
    if (!user) {
      return toast.error("Please Sign In");
    } else {
      const orderedProduct = {
        productID: id,
        email: user.email,
        name,
        price,
        image,
        date: new Date().toLocaleDateString("en-US"),
      };
      fetch("https://unknown-server-rho.vercel.app/new-orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Added Successfully!");
            console.log("added new order", data);
          }
        });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "black",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://unknown-server-rho.vercel.app/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                confirmButtonColor: "black",
                cancelButtonColor: "#d33",
                icon: "success",
              });
              const remaining = cart.filter((product) => product._id !== id);
              setCart(remaining);
            }
          });
      }
    });
  };

  const productInfo = { products, handleCart, cart, handleDelete };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
