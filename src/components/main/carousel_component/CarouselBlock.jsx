import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";
import essentials from "../../../assets/svg/essentials.svg";
import popular from "../../../assets/svg/popular.svg";
import seo from "../../../assets/svg/seo.svg";
import UiDesign from "../../../assets/svg/ui_design.svg";
import uxDesign from "../../../assets/svg/ux_design.svg";
import TitleComponent from "../../titleComponent/TitleComponent";
import "./carousel_block.css";

SwiperCore.use([Autoplay]);

const CarouselBlock = () => {
  const myArray = [
    {
      title: "UI design",
      svgPath: UiDesign,
    },
    {
      title: "UX Design",
      svgPath: uxDesign,
    },
    {
      title: "SEO",
      svgPath: seo,
    },
    {
      title: "Essentials",
      svgPath: essentials,
    },
    {
      title: "Popular",
      svgPath: popular,
    },
  ];

  return (
    <div className="carousel" id="readingList">
      <TitleComponent title={"Reading Lists"} />
      <Swiper
        spaceBetween={0}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log("OnSwiper" + swiper)}
        loop={true}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      >
        {myArray.map(({ svgPath, title }, index) => {
          return (
            <SwiperSlide className="swiperSlide" key={index}>
              <img src={svgPath} alt={title} />
              <p>{title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselBlock;
