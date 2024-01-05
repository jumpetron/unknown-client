import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./ProfileCard.css";

const ProfileCard = ({ isActive }) => {
  const { signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out user");
        toast.success("Successfully Sign Out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`profile-card ${isActive ? "open" : ""}`}>
      <p onClick={handleSignOut}>Sign out</p>
    </div>
  );
};

export default ProfileCard;
