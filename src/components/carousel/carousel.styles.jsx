import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

// export const SlidePicContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 0;
//   padding-top: 33.25%;
// `;

export const SlidePic = styled.div`
  position: relative;
  height: 80vh;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  ${"" /* border: thick solid pink; */}
`;

export const SlideTitle = styled.span`
  position: absolute;
  bottom: 50%;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  ${"" /* border: thin solid green; */}
`;
