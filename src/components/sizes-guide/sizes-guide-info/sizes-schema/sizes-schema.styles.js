import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const Schema = styled.div`
  width: 50%;
  height: 350px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  ${"" /* border: thin solid black; */}
`;
