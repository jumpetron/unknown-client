import "./CartProduct.css";

const CartProduct = ({ product, handleDelete }) => {
  const { name, price, image, _id } = product;
  const qty = 1;
  const totalPrice = qty * price;

  return (
    <div>
      <div className="cart-product-box">
        <div className="cart-product-content">
          <div className="cart-product-img">
            <img src={image} alt="" />
          </div>
          <div className="cart-product-description">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Quantity: 1</p>
            <button onClick={() => handleDelete(_id)} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
        <div>
          <p>Total</p>
          <small>${totalPrice}</small>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
