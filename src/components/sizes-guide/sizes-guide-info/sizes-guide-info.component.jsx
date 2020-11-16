import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectSizesGuideInfo } from "../../../redux/selectors/sizes-guide.selectors";

import SizesTable from "./sizes-table/sizes-table.component";
import SizesSchema from "./sizes-schema/sizes-schema.component";

import {
  Container,
  TableContainer,
  SchemaContainer,
  Title,
} from "./sizes-guide-info.styles";

const SizesGuideInfo = ({ section }) => {
  const sizesGuide = useSelector(selectSizesGuideInfo, shallowEqual);

  const { Sizes, Equivalences, Url } = sizesGuide;
  return (
    <Container>
      <TableContainer>
        {Sizes && <Title>{section.replace("scrub-", "").trim()}</Title>}
        {Sizes && (
          <SizesTable sizes={Sizes} title={"Sizes" || "sizes" || "SIZES"} />
        )}
        {Equivalences && <Title>Conversion Table</Title>}
        {Equivalences && (
          <SizesTable sizes={Equivalences} title={"EUR" || "eur" || "Eur"} />
        )}
      </TableContainer>
      <SchemaContainer>{Url && <SizesSchema url={Url} />}</SchemaContainer>
    </Container>
  );
};

export default SizesGuideInfo;
