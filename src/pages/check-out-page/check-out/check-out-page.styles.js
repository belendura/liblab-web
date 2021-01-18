import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;
`;

export const CartContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items:space-between;
  width:100%;
  margin: 10px 0;
border-bottom: 1px solid grey;
`;

export const Header = styled.header`
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: 10px;
${'' /* border: thin solid black;  */}
text-align:center;
`;

export const HeaderTitle = styled.span`
  font-size: 10px;
  font-weight: bold;
  text-transform: capitalize;
  width:10%;
`;

export const HeaderPrice = styled.span`
  font-size: 10px;
  font-weight: bold;
  text-transform: capitalize;
  width:10%;
`;

export const ItemsContainer = styled.div`
display:flex;
flex-direction: column;
`;

export const Empty = styled.span`
font-size:12px;
text-align: center;
`;

export const Total = styled.span`
font-size:12px;
text-transform:uppercase;
font-weight:bold;
margin-left: auto;
padding:5px;
`;


export const PaymentExtras = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  border:thin solid black;
`;

