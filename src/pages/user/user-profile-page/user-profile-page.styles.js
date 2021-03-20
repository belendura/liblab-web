import styled from "styled-components";


export const Container = styled.div`
max-width: 997px;
display: flex;
justify-content:space-between;
align-items:center;
margin: 0 auto;
overflow: hidden;

`;

export const MenuContainer=styled.d
export const ProfileContainer = styled.div`

display: flex;
flex-direction:column;
align-items:flex-start;

`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
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

export const Label = styled.label`
 font-size:10px;
font-weight:bold;
margin-top:5px;
`;

export const Select = styled.select`
 font-size:10px;

`;

export const Option = styled.option`
 font-size:10px;

`;

    // visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  
