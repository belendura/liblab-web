import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import queryString from "query-string";

import { selectCarousel } from "../../redux/selectors/collections.selectors";

import { fromServerEnumerate } from "../../firebase/enumerate";

import { Container, Picture, Title } from "./carousel.styles";

const Carousel = () => {
  const history = useHistory();
  const [oldSlide, setOldSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current, next) => {
      setOldSlide(current);
      setCurrentSlide(next);
    },
    afterChange: (current) => setNextSlide(current),
  };

  const carousel = useSelector(selectCarousel, shallowEqual);
  let pathName = [];
  return (
    <div>
      {carousel && (
        <Slider {...settings}>
          {Object.entries(carousel)
            .filter((item, index) => index < 7)
            .map((item, index) => {
              const [key, value] = item;

              const query = {
                labels: `${fromServerEnumerate[key]}`,
              };

              pathName[index] =
                key !== "women" && key !== "men" && key !== "unisex"
                  ? `/shop/featured?${queryString.stringify(query, {
                      arrayFormat: "comma",
                    })}`
                  : `/shop/${key}`;
              return (
                <Container key={index}>
                  <Picture src={value} />
                  <Title
                    key={index}
                    onClick={() => history.push(pathName[currentSlide])}
                  >
                    {fromServerEnumerate[key].replace("-", " ")}
                  </Title>
                </Container>
              );
            })}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
