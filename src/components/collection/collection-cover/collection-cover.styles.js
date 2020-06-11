import styled from "styled-components";

export const CollectionCoverContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CollectionCoverTitle = styled.span`
  font-size: 20px;
  text-transform: uppercase();
  font-weight: bold;
`;
