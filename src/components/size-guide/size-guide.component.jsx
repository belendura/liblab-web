import React, { useEffect, useRef } from "react";

import { SizeGuideContainer } from "./size-guide.styles";

const SizeGuide = ({ setSizeGuideVisible }) => {
  const wrapperRef = useRef(null);

  const handleHideDropdown = (event) => {
    console.log("event.key", event);

    if (event.key === "Escape" || event.key === " ") {
      setSizeGuideVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSizeGuideVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    document.addEventListener("keydown", handleHideDropdown, false);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, false);
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <SizeGuideContainer ref={wrapperRef} onClick={() => handleClickOutside()}>
      <p>SIZE GUIDE CONTAINER</p>
    </SizeGuideContainer>
  );
};

export default SizeGuide;
