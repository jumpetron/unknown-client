import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Navbar.css";

const Navbar = ({ theme, changeTheme }) => {
  const { user } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);

  const addClassName = () => {
    setIsActive(!isActive);
  };

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-cart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <header className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-item">{navItem}</div>
        <div>
          {user ? (
            <div className="user-profile">
              <small>Hi {user?.displayName}</small>
              <img
                onClick={addClassName}
                src={
                  user
                    ? user.photoURL
                    : "https://m.media-amazon.com/images/I/41jLBhDISxL._AC_UF1000,1000_QL80_.jpg"
                }
                alt=""
              />
              <ProfileCard isActive={isActive} />
            </div>
          ) : (
            <div className="login-signup">
              <li className="btn">
                <NavLink to="/login">Login</NavLink>
              </li>
              <p>Or</p>
              <li className="btn">
                <NavLink to="/register">Register</NavLink>
              </li>
              <p onClick={changeTheme}>{theme ? "Dark" : "Light"}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
