import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import kid from "../../assets/Banner/kid-banner.png";
import men from "../../assets/Banner/men-banner.png";
import women from "../../assets/Banner/women-banner.png";
import Products from "../../components/Products/Products";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./ShowProductByName.css";

export const ShowProductByName = () => {
  const [loadMore, setLoadMore] = useState(8);
  const brand = useParams();
  const loadedData = useLoaderData();

  const loadMoreBtn = () => {
    setLoadMore(loadMore + 4);
  };
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  if (loadedData.length > 0) {
    return <ErrorPage />;
  }

  console.log(loadedData);

  return (
    <div className="container">
      <div className="brand-container">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={men} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={women} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={kid} alt="" />
          </div>
        </div>
        <div className="brand-product-container">
          <div className="brand-title">
            <h2>{brand.brandName}</h2>
          </div>
          <div className="product-data">
            {loadedData.slice(0, loadMore).map((item) => (
              <Products key={item._id} product={item} />
            ))}
          </div>
          <button className="load-more-btn" onClick={loadMoreBtn}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};
