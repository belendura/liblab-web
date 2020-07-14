import styled from "styled-components";

export const ShopItemPicturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-template-rows: auto auto;
  gap: 10px;
  gap: 10px;
`;

export const PictureContainer = styled.div`
  background-image: url(${(props) => props.url});
  width: 300px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid black;
`;
