import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopOverviewContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 30px;
  width: 180px;
  border: 1px dotted red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  bottom: 30px;
`;
