import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../../../redux/actions/modal.actions";
import {
  Container,
  PictureContainer,
  Picture,
  Carousel,
  CarouselPictureContainer,
  CarouselPicture,
  ArrowLeft,
  ArrowRight,
} from "./extended-view.styles";

const ExtendedView = ({ url, index }) => {
  const dispatch = useDispatch();
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
      <PictureContainer>
        <Picture
          src={url[displayedView]}
          onClick={() => dispatch(closeModal())}
        />
      </PictureContainer>
      <Carousel>
        {url &&
          url.map((item, index) => {
            return (
              <CarouselPictureContainer key={index}>
                <CarouselPicture
                  src={item}
                  index={index}
                  displayedView={displayedView}
                  onClick={() => setDisplayedView(index)}
                />
              </CarouselPictureContainer>
            );
          })}
      </Carousel>
    </Container>
  );
};

export default ExtendedView;
