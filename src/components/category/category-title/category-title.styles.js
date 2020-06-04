import styled from "styled-components";

export const CategoryTitleContainer = styled.div`
  width: 35vh;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 45px 20px;
  padding: 10px;
`;

export const CategoryTitleStyled = styled.span`
  margin: auto;
  font-size: 20px;
  font-weight: bold;
`;
export const CategoryDescription = styled.span`
  margin: auto;
  font-size: 12px;
`;
export const CategoryButton = styled.button`
  margin: 10px 20px;
  padding: 10px;
  font-size: 20px;
  background-color: grey;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #d3d0c6;
  }
`;
