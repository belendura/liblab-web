import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ${"" /* border: thin solid black; */}
`;

export const CoverContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  ${"" /* border: thin solid black; */}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50vh;
  background-color: rgba(148, 151, 155, 0.1)
    ${"" /* border: thin solid black; */};
`;

export const CollectionCover = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 50vh;
  ${"" /* border: thin solid black; */}
`;
