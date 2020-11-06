import React from "react";
import Slider from "react-slick";

import { CAROUSEL_PICS } from "../../assets/carousel-pics";

import { Container, SlidePic, SlideTitle } from "./carousel.styles";

const Carousel = () => {
  const settings = {
    // dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Container>
      <Slider {...settings}>
        {CAROUSEL_PICS &&
          CAROUSEL_PICS.map((item, index) => {
            const { url, title } = item;
            return (
              <SlidePic key={index} url={url}>
                <SlideTitle>{title}</SlideTitle>
              </SlidePic>
            );
          })}
      </Slider>
    </Container>
  );
};

export default Carousel;
