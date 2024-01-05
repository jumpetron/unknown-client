import BrowseByBrand from "../BrowseByBrand/BrowseByBrand";
import BrowseByCategory from "../BrowseByCategory/BrowseByCategory";
import Hero from "../Hero/Hero";
import HomeProduct from "../HomeProduct/HomeProduct";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrowseByBrand />
      <BrowseByCategory />
      <HomeProduct />
    </div>
  );
};

export default Home;
