import { Link } from "react-router-dom";
import brandName from "../../../Data";
import "./BrowseByBrand.css";

const BrowseByBrand = () => {
  return (
    <div className="container ">
      <div className="browse-by-brand">
        <div>
          <h2 className="title">Shop By Brand</h2>
        </div>
        <div className="brand-logo-container">
          {brandName.map((item) => (
            <div key={item.id} className="brand-logo-box">
              <Link to={`/${item.name}`}>
                <div className="brand-logo">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByBrand;
