import { useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { ProductContext } from "../../ProductProvider/ProductProvider";
import "./Product.css";

const Products = ({ product }) => {
  const { handleCart } = useContext(ProductContext);
  const { name, image, price, review, _id } = product;

  return (
    <div className="product-box">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <h4>{name}</h4>

      <div className="price-review">
        <p>$ {price}</p>
        <div className="review">
          <Rating
            emptySymbol={<AiOutlineStar className="icon empty" />}
            fullSymbol={<AiOutlineStar className="icon full" />}
            readonly
            initialRating={review.rating}
          />
          <small>({review.people})</small>
        </div>
      </div>

      <Link to={`/product/${_id}`}>
        <button className="buy-now">See Details</button>
      </Link>
      <button
        onClick={() => handleCart(_id, name, price, image)}
        className="buy-now"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
