import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ShopItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExtrasContainer= styled.div`
width:100%;
 display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-template-rows: auto;
  grid-gap: 5px;
  margin: 0; 

`
export const Title=styled.span`
font-size:8px;
text-transform:uppercase;
font-weight:bold;
margin:10px 0;
`