import React, { useEffect, useRef } from "react";

const ClickOutside = ({ children, action }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    // console.log("action in ClickOutside", action);
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      action !== undefined
    )
      action();
  };

  const handleHideDropdown = (event) => {
    // console.log("action in HideDropDown", action);
    if (event.key === "Escape" && action !== undefined) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleHideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleHideDropdown);
    };
  }, [handleClickOutside, handleHideDropdown]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;
