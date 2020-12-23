import React from "react";
import {useHistory} from "react-router-dom"

import { Container,Picture } from "./recent-view.styles";

const RecentView = ({item}) => {
     const history = useHistory();
  const {
    collection,
    section,
    newUrl,
    description,
    reference,
    color,
  } = item;

  return (
      <Container>
        <Picture
          src={newUrl}
          onClick={() =>
            history.push(
              `/shop/${collection}/${section}/${description}&${reference}/${color.name}`
            )
          }
        />
     </Container>)
 
};

export default RecentView;
