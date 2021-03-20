import React, { useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

import { selectCarousel } from "../../../../redux/selectors/collections.selectors";

import Card from "./components/card";

import { getPathName } from "./utils";

import { SliderContainer } from "./carousel.styles";

const Carousel = () => {
  const history = useHistory();

  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const handleClick = useCallback((pathName) => history.push(pathName), [
    history,
  ]);

  const carousel = useSelector(selectCarousel, shallowEqual);

  return (
    <SliderContainer>
      {carousel && (
        <Slider {...settings}>
          {Object.entries(carousel)
            .filter((item, index) => index < 7)
            .map((item, index) => {
              const [key, value] = item;
              const pathName = getPathName(key);
              return (
                <Card
                  key={index}
                  name={key}
                  url={value}
                  onClick={() => handleClick(pathName)}
                />
              );
            })}
        </Slider>
      )}
    </SliderContainer>
  );
};

export default Carousel;
