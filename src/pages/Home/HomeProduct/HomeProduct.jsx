import { useContext, useState } from "react";
import { ProductContext } from "../../../ProductProvider/ProductProvider";
import Products from "../../../components/Products/Products";
import "./HomeProduct.css";

const HomeProduct = () => {
  const { products } = useContext(ProductContext);
  const [loadMore, setLoadMore] = useState(8);

  const loadMoreBtn = () => {
    setLoadMore(loadMore + 4);
  };

  return (
    <div className="container">
      <div className="product-container">
        <div className="title">
          <h2>Our Products</h2>
        </div>
        <div className="product-content">
          {products.slice(0, loadMore).map((item) => (
            <Products
              key={item._id}
              product={item}
              handleLoadMore={loadMoreBtn}
            />
          ))}
        </div>
        <button className="load-more-btn" onClick={loadMoreBtn}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
