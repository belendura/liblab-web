import styled from "styled-components";

export const PictureList = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(50px, 1fr));
  grid-template-rows: auto;
  grid-gap: 5px;
  margin: 0;
`;

export const PictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
  grid-column: span 6;
  border: thin solid grey;
  cursor: zoom-in;

  &:nth-child(n + 5) {
    grid-column: span 4;
    height: 50vh;
  }
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
