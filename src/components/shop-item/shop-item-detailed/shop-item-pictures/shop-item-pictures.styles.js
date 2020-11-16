import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(20px, 1fr));
  grid-template-rows: auto;
  grid-gap: 5px;
  margin: 0;
`;

export const Picture = styled.div`
  background-image: url(${(props) => props.url});
  ${"" /* grid-area: "big"; */}
  grid-column: span 6;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  border: thin solid grey;
  cursor: zoom-in;

  &:nth-child(n + 5) {
    grid-column: span 4;
    height: 50vh;
  }
`;
