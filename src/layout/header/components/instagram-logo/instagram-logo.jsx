import React from "react";
import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import { Instagram } from "./instagram-logo.styled";

const InstagramLogo = ({ onClick }) => {
  const [logoProps, logoSet] = useSpring(() => ({
    from: { fill: "rgb(14,26,19)" },
  }));
  const setOnMouseEnterProps = () => {
    logoSet({
      to: [{ fill: "gold" }],
    });
  };
  const setOnMouseLeaveProps = () => {
    logoSet({
      to: [{ fill: "rgb(14,26,19)" }],
    });
  };

  return (
    <Instagram
      style={logoProps}
      onMouseEnter={setOnMouseEnterProps}
      onMouseLeave={setOnMouseLeaveProps}
      onClick={onClick}
    />
  );
};

InstagramLogo.propTypes = {
  onClick: PropTypes.func,
};

export default InstagramLogo;
