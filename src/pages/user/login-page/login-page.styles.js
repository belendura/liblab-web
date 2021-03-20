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
export const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-top:100px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


export const Input = styled.input`
margin: 5px 0;
${'' /* background: rgba(186,187,189,0.4);
border:none; */}
`;

export const CheckContainer = styled.div`
margin: 10px 0;
 
`;

export const CheckLabel = styled.label`
 font-size:10px;
 display: flex;
  justify-content:flex-start;
  align-items:center;
`;


export const CheckInput = styled.input`
  display: none;
`;

export const Icon = styled.svg`
  stroke: black;
  stroke-width: 4px;
  fill: none;
  margin-bottom: 8px;
`;

export const CheckInputStyled = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border: 1px solid black;
  transition: all 150ms;


  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CreateAccount=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:15px;

`
export const TextLink= styled(Link)`
font-size:10px;
 margin: 5px 0;
 
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;

export const Text = styled.span`
 font-weight: bold;
 margin: 5px 0;

`;
