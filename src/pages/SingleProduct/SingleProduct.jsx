import { AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { ProductContext } from "../../ProductProvider/ProductProvider";
import "./SingleProduct.css";

const SingleProduct = () => {
  const loadedData = useLoaderData();
  const { handleCart } = useContext(ProductContext);

  const {
    _id,
    brand,
    category,
    fullDescription,
    image,
    name,
    price,
    qty,
    type,
    review,
  } = loadedData;

  return (
    <div className="container">
      <div className="single-product-box">
        <div className="single-product-img">
          <img src={image} alt="" />
        </div>
        <div className="single-product-content">
          <h3>{name}</h3>
          <div className="review-section">
            <Rating
              emptySymbol={<AiOutlineStar className="icon empty" />}
              fullSymbol={<AiOutlineStar className="icon full" />}
              readonly
              initialRating={review.rating}
            />
            <small>({review.people})</small>
          </div>
          <div className="brand-category-type">
            <p>
              <small>Brand: {brand}</small>
            </p>
            <p>
              <small>Category: {category}</small>
            </p>
            <p>
              <small>Type: {type}</small>
            </p>
          </div>
          <p>Available: {qty}</p>
          <p>Price: ${price}</p>
          <div className="single-product-btn">
            <button onClick={() => handleCart(_id, name, price, image)}>
              Add To Cart
            </button>
            <Link to={`/product/update/${_id}`}>
              <button>Update Product</button>
            </Link>
          </div>
          <div className="single-product-description">
            <h3>Description</h3>
            <p>{fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
