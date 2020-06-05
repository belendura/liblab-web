import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryOverviewContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 180px;
  margin: 15px;
  border: 1px dotted red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  bottom: 30px;
  text-transform: uppercase;
`;
