import { Link } from "react-router-dom";
import { categoryName } from "../../../Data";
import "./BrowseByCategory.css";

const BrowseByCategory = () => {
  return (
    <div className="container">
      <div className="browse-by-category">
        <div>
          <h2 className="title">Shop By Category</h2>
        </div>
        <div className="category-container">
          {categoryName.map((item) => (
            <Link to={`/${item.name}`} key={item.id}>
              <div className="category-box">
                <div className="category-image">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
