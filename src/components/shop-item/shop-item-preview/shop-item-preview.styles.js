import styled from "styled-components";

export const Container = styled.div`
  width: 25vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 5px;
  margin: 10px;
  border: thin solid grey;
`;

export const Picture = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 85%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Footer = styled.div`
  height: 15%;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
export const FooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.span`
  font-size: 12px;
`;

export const Price = styled.span`
  font-size: 12px;
`;

export const WishlistContainer = styled.div`
  position: absolute;
  bottom: 16%;
  right: 10px;
  z-index: 20;
`;

export const NewItem = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: auto;
  color: ${(props) => {
    return props.newItem ? "black" : "transparent";
  }};
`;
