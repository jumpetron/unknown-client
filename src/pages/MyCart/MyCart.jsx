import { useContext } from "react";
import { ProductContext } from "./../../ProductProvider/ProductProvider";
import CartProduct from "./../../components/CartProduct/CartProduct";
import "./MyCart.css";

export const MyCart = () => {
  const { cart, handleDelete } = useContext(ProductContext);

  const total =
    cart && cart.length > 0
      ? cart.reduce((acc, product) => acc + Number(product.price) * 1, 0)
      : 0;

  return (
    <div className="container">
      <div className="cart-product-container">
        <div>
          <h2 className="cart-title">My Cart</h2>
        </div>
        <div className="cart-box">
          {cart?.map((product) => (
            <CartProduct
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="cart-footer">
          <div>
            <button className="checkout-btn">Check Out</button>
          </div>
          <div>
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
