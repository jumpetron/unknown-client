import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  //create user
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //create user
    signInUser(email, password)
      .then(() => {
        toast.success("Successfully Sign In!");
        form.reset();
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Password Or Email Doesn't Match!");
      });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-form">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="email-field">
              <p>Your Email</p>
              <input name="email" type="email" placeholder="Your Email" />
            </div>
            <div className="password-field">
              <p>Password</p>
              <input name="password" type="password" placeholder="Password" />
            </div>
            <div className="submit-field">
              <input type="submit" value="Login" />
            </div>
            <div className="login-option">
              <p>Or</p>
              <div className="login-social">
                <p>Goolge</p>
                <p>GitHub</p>
                <p>GitHub</p>
              </div>
            </div>
            <p className="go-to-register">
              Need an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
