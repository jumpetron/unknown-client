import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="container">
      <div className="download-content">
        <h2>Download Our App From</h2>
        <div className="app-store">
          <div className="store-content">
            <IoLogoGooglePlaystore className="icon" />
            <div>
              <small>Available now</small>
              <p>Play Store</p>
            </div>
          </div>
          <div className="store-content">
            <AiOutlineApple className="icon" />
            <div>
              <small>Available now</small>
              <p>App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
