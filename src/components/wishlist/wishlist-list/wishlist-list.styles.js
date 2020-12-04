import styled from "styled-components";

export const Container = styled.div`
  
  display flex;
 justify-content:center; 
  ${"" /* align-items:center; */}
  border: thick solid pink;
`;

export const WishlistContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  object-fit: cover;
  grid-gap: 20px;
  padding: 10px;
  border: thick solid yellow;
`;

export const Text = styled.span`
  ${"" /* text-align: center; */}
`;
