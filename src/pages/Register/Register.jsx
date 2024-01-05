import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  const { createUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    //password validation
    if (password !== confirmPassword) {
      // alert("Password and Confirm Password do not match.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Doesn't Match.",
      });
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{};:'",.<>/?]).{6,}$/;
    if (password.length < 6 || !password.match(passwordRegex)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters, contain a capital letter, and a special character.",
      });

      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            console.log(error);
          });
        form.reset();
        signOutUser()
          .then(() => {
            //sign out user
          })
          .catch((error) => {
            console.log(error);
          });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="register-container">
        <div className="register-form">
          <form onSubmit={handleRegister}>
            <div className="name-field">
              <p>Your Name</p>
              <input name="name" type="text" placeholder="Your Name" />
            </div>
            <div className="email-field">
              <p>Your Email</p>
              <input name="email" type="email" placeholder="Your Email" />
            </div>
            <div className="photo-field">
              <p>Your Photo</p>
              <input name="photo" type="text" placeholder="Your Photo Url" />
            </div>
            <div className="password-field">
              <p>Password</p>
              <input name="password" type="password" placeholder="Password" />
            </div>
            <div className="password-field">
              <p>Password</p>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <input type="submit" value="Register" />
            </div>
            <div className="register-option">
              <p>Or</p>
              <div className="register-social">
                <p>Goolge</p>
                <p>GitHub</p>
                <p>GitHub</p>
              </div>
            </div>
            <p className="go-to-login">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
