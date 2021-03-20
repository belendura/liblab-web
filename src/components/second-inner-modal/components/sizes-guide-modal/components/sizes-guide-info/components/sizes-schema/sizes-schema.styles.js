import styled from "styled-components";

export const PictureContainer = styled.div`
  width: 200px;
  position: relative;
  height: 0;
  padding-top: 100%;
  overflow: hidden;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
