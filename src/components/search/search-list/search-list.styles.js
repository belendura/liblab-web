import styled from "styled-components";

export const Container = styled.div`

  display flex;
  flex-direction:column;
 justify-content:center; 
text-align: center;
`;


export const SearchListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.gridView
      ? "repeat(4, minmax(200px, 1fr))"
      : "repeat(2, minmax(200px, 1fr))"};
  object-fit: cover;
  grid-gap: 20px;
  padding: 10px;

`;

export const Text = styled.span`
font-size: 10px;
`;