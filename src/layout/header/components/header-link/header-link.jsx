import React from "react";
import PropTypes from "prop-types";
import { LinkContainer, ShopLink, Underline } from "./header-link.styled";
import { useSpring } from "react-spring";

const HeaderLink = ({ to, children, baseColor, accentColor }) => {
  const [textProps, textSet] = useSpring(() => ({
    from: { color: baseColor },
    config: {
      duration: 250,
    },
  }));
  const [underlineProps, underlineSet] = useSpring(() => ({
    from: { width: "0%", backgroundColor: baseColor },
    config: {
      duration: 250,
    },
  }));
  const setOnMouseEnterProps = () => {
    textSet({
      to: [{ color: accentColor }],
    });
    underlineSet({
      to: [{ width: "100%", backgroundColor: accentColor}],
    });
  };
  const setOnMouseLeaveProps = () => {
    textSet({
      to: [{ color: baseColor }],
    });
    underlineSet({
      to: [{ width: "0%", backgroundColor: baseColor }],
    });
  };

  return (
    <LinkContainer
      onMouseEnter={setOnMouseEnterProps}
      onMouseLeave={setOnMouseLeaveProps}
    >
      <ShopLink to={to} style={textProps}>
        {children}
      </ShopLink>
      <Underline style={underlineProps} />
    </LinkContainer>
  );
};

HeaderLink.defaultProps = {
  baseColor: "black",
  accentColor: "gold",
}

HeaderLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      state: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
  ]),
  children: PropTypes.node,
  baseColor: PropTypes.string,
};

export default HeaderLink;
