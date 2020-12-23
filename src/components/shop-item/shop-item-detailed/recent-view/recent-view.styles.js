import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
grid-column: span 1; 
  border: thin solid grey;
  cursor:pointer;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;