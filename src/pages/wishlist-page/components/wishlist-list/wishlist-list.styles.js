import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
 text-align:center;
  overflow: hidden;
 ${'' /* border: thin solid black;  */}
`;

export const WishlistContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  object-fit: cover;
  grid-gap: 20px;
  padding: 10px;

`;

export const Text = styled.span`
font-size:12px;

`;
