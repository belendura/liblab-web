import styled from "styled-components";


import { ReactComponent as SearchLogo } from "../../../assets/icons/search-logo.svg";
import { ReactComponent as CloseLogo } from "../../../assets/icons/close-logo.svg";

export const Container = styled.div`
width:300px;
 display: flex;
  justify-content: space-between; 
  align-items:center;
  border:thick solid black;
padding:10px;
`;


export const Input = styled.input`

`;

export const Search = styled(SearchLogo)`
  width: 25px;
`;

export const Close = styled(CloseLogo)`
 width:20px;
`;
