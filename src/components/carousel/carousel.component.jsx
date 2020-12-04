import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Slider from "react-slick";

import { selectCarousel } from "../../redux/selectors/collections.selectors";

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

  const carousel = useSelector(selectCarousel, shallowEqual);

  return (
    <Container>
      {carousel && (
        <Slider {...settings}>
          {Object.entries(carousel)
            .filter((item, index) => index < 7)
            .map((item, index) => {
              const [key, value] = item;
              return (
                <SlidePic key={index} url={value}>
                  <SlideTitle>{key}</SlideTitle>
                </SlidePic>
              );
            })}
        </Slider>
      )}
    </Container>
  );
};

export default Carousel;
