import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  text-align: center;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 0px;
  margin: 0;
  transform: translate(0, -50%);
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    color: gold;
    text-decoration-line: underline;
  }
`;
