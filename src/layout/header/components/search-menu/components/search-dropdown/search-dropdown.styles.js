import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
  background-color: white;
  padding: 10px 30px;
  z-index: 10;
 
`;

export const RecentSearchesContainer= styled.div`
  display: flex;
 flex-direction:column;
 align-items:center;
  margin-right:30px;
 
`;

export const RecentSearches= styled.div`
width: 300px;
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
  align-items: flex-start;
 
`;

export const RecentViewedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-right: 30px;

`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 10px;
  padding: 10px 0;
  text-transform: uppercase;
`;