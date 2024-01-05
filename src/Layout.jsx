import { useState } from "react";
import { Outlet } from "react-router-dom";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";

export const Layout = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "dark" : ""}>
      <Navbar changeTheme={changeTheme} theme={theme} />
      <Outlet />
      <SubscribeForm />
      <DownloadApp />
      <Footer />
    </div>
  );
};
