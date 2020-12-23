import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
max-width: 997px;
display: flex;
flex-direction: column;
align-items:center;
margin: 0 auto;
overflow: hidden;
text-align:center;
`;

export const Title = styled.span`
font-size: 30px;
font-weight: bold;
margin-top:100px;
margin-bottom: 10px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
${'' /* align-items:center; */}
`;


export const Input = styled.input`
margin: 5px 0;
${'' /* background: rgba(186,187,189,0.4);
border:none; */}
`;

export const TextLink= styled(Link)`
font-size:10px;
margin: 5px 0;

cursor: pointer;
&:hover {
  color: gold;
}
`;

export const Text = styled.span`

font-size:12px;
margin: 10px 0;
`;
