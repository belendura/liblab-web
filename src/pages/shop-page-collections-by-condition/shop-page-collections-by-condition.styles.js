import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  ${"" /* border: thin solid black; */}
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(148, 151, 155, 0.2);
`;

export const TitleContainer = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 10px;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-size: 12px;
`;

export const PictureContainer = styled.div`
  width: 60%;
  position: relative;
  height: 0;
  padding-top: 56.25%;
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
