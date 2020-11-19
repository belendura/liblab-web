import React, { useState } from "react";

import {
  Container,
  Picture,
  CarouselContainer,
  CarouselPic,
  ArrowLeft,
  ArrowRight,
} from "./extended-view.styles";

const ExtendedView = ({ url, index }) => {
  console.log("url", url);
  const [displayedView, setDisplayedView] = useState(index);

  const displayedViewForward = (event) => {
    displayedView < url.length - 1
      ? setDisplayedView(displayedView + 1)
      : setDisplayedView(0);
  };

  const displayedViewBackward = (event) => {
    displayedView > 0
      ? setDisplayedView(displayedView - 1)
      : setDisplayedView(url.length - 1);
  };

  return (
    <Container>
      <ArrowLeft onClick={displayedViewBackward} />
      <ArrowRight onClick={displayedViewForward} />
      <Picture url={url[displayedView]} />
      <CarouselContainer>
        {url &&
          url.map((item, index) => {
            return (
              <CarouselPic
                key={item}
                src={item}
                index={index}
                displayedView={displayedView}
                onClick={() => setDisplayedView(index)}
              />
            );
          })}
      </CarouselContainer>
    </Container>
  );
};

export default ExtendedView;
