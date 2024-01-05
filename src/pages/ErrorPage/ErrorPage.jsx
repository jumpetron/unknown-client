import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="error-page">
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div className="link-container">
          <Link to="/" className="more-link">
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
