import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { SliderContainer } from "./carousel.styles";
import Card from "./components/card";
import { getPathName } from "./util";

const Carousel = ({ items }) => {
  const history = useHistory();
  const settings = {
    dots: false,
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

  return (
    <SliderContainer>
      <Slider {...settings}>
        {Object.entries(items)
          .filter((item, index) => index < 7)
          .map((item, index) => {
            const [key, value] = item;
            const pathName = getPathName(key);
            return (
              <Card
                onClick={() => handleClick(pathName)}
                name={key}
                url={value}
                key={index}
              />
            );
          })}
      </Slider>
    </SliderContainer>
  );
};

export default Carousel;
