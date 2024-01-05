import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="browse">
              <p>Browse</p>
              <Link to="/cloth">
                <p>Clothings</p>
              </Link>
              <Link>
                <p>Shoe</p>
              </Link>
              <Link>
                <p>Watch</p>
              </Link>
            </div>
            <div className="company">
              <p>Company</p>
              <Link>
                <p>About</p>
              </Link>
              <Link>
                <p>Twitter</p>
              </Link>
              <Link>
                <p>Instagram</p>
              </Link>
            </div>
            <div className="newsletter">
              <p>Join Our Newsletter</p>
              <div>
                <input type="email" name="" id="" />
                <input type="submit" value="Subscribe" />
              </div>
              <small>
                *Will send you weekly updates for your better finance
                management.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
