import styled from "styled-components";

export const CollectionCoverContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CollectionCoverTitle = styled.span`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  margin: 0 20px;
  font-weight: bold;
`;
