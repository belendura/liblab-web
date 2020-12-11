import styled from "styled-components";
import { ReactComponent as RecycledLogo } from "../../../assets/icons/recycle-sign.svg";
import { ReactComponent as OrganicLogo } from "../../../assets/icons/organic-sign.svg";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: thin solid grey;
`;

export const PictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomInfoContainer = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border: thin solid green; */}
`;

export const Recycled = styled(RecycledLogo)`
  width: 20px;
  margin: 0 5px 0 10px;
`;

export const Organic = styled(OrganicLogo)`
  width: 20px;
  height: 25px;
  margin: 0 5px 0 10px;
`;

export const BottomInfo = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: black;
  text-transform: capitalize;
`;

export const Footer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const FooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.span`
  font-size: 12px;
`;

export const WishlistContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  z-index: 5;
`;

export const NewItem = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 auto 5px;
  color: ${(props) => {
    return props.newItem ? "black" : "transparent";
  }};
`;
