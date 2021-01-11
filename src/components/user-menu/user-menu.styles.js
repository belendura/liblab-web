import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
max-width: 997px;
display: flex;
flex-direction: column;
align-items:center;
margin: 0 auto;
overflow: hidden;

`;

export const TextLink= styled(Link)`
font-size:10px;
 margin: 5px 0;
 
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;


export const Text= styled.span`
font-size:10px;
 margin: 5px 0;
 
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
