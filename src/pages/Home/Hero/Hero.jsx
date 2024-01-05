import { Link } from "react-router-dom";
import "../Home/Home.css";

const Hero = () => {
  return (
    <div className="container">
      <div className=" hero-section">
        <div className="hero-content">
          <h2>Discover Your Style, Embrace the Unknown.</h2>
          <p>
            Uncover style secrets for women, men, and kids in fashion, shoes,
            and accessories.
          </p>
          <Link to="/shop" className="cta-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
