import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Slider from "react-slick";

import { selectCarousel } from "../../redux/selectors/collections.selectors";

import { fromServerEnumerate } from "../../firebase/collections-enumerate";

import { Container, Picture, Title } from "./carousel.styles";

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
    <div>
      {carousel && (
        <Slider {...settings}>
          {Object.entries(carousel)
            .filter((item, index) => index < 7)
            .map((item, index) => {
              const [key, value] = item;
              return (
                <Container key={index}>
                  <Picture src={value} />
                  <Title>{fromServerEnumerate[key]}</Title>
                </Container>
              );
            })}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
