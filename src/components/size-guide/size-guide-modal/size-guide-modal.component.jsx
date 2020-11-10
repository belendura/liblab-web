import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../../redux/actions/modal.actions";

import SizeTable from "../size-table/size-table.component";

import {
  Container,
  Title,
  ColContainer,
  Collections,
  SecContainer,
  Sections,
  TablesContainer,
  SizeTableContainer,
  EquivalencesTable,
  SchemaContainer,
  FrontSchema,
  BackSchema,
  CloseButton,
} from "./size-guide-modal.styles";

const SizeGuideModal = () => {
  const dispatch = useDispatch();
  const [genderSizes, setGenderSizes] = useState("women");
  const [womenClothingSizes, setWomenClothingSizes] = useState("womenTops");
  const [menClothingSizes, setMenClothingSizes] = useState("menTops");

  const setWomenSizes = (event) => {
    return setGenderSizes("women");
  };

  const setMenSizes = (event) => {
    return setGenderSizes("men");
  };

  const setWomenTopsSizes = (event) => {
    return setWomenClothingSizes("womenTops");
  };

  const setMenTopsSizes = (event) => {
    return setMenClothingSizes("menTops");
  };

  const setWomenPantsSizes = (event) => {
    return setWomenClothingSizes("womenPants");
  };

  const setMenPantsSizes = (event) => {
    return setMenClothingSizes("menPants");
  };

  const setWomenJacketsSizes = (event) => {
    return setWomenClothingSizes("womenJackets");
  };

  const setMenJacketsSizes = (event) => {
    return setMenClothingSizes("menJackets");
  };

  return (
    <Container>
      <CloseButton
        onClick={() => {
          dispatch(closeModal());
        }}
      ></CloseButton>
      <Title>SIZE GUIDE</Title>
      <ColContainer>
        <Collections genderSizes={genderSizes} onClick={setWomenSizes}>
          women
        </Collections>
        <Collections genderSizes={genderSizes} onClick={setMenSizes}>
          men
        </Collections>
      </ColContainer>
      <SecContainer>
        {genderSizes === "women" && (
          <Sections
            clothingSizes={womenClothingSizes}
            onClick={setWomenTopsSizes}
          >
            Tops
          </Sections>
        )}
        {genderSizes === "women" && (
          <Sections
            clothingSizes={womenClothingSizes}
            onClick={setWomenPantsSizes}
          >
            Pants
          </Sections>
        )}
        {genderSizes === "women" && (
          <Sections
            clothingSizes={womenClothingSizes}
            onClick={setWomenJacketsSizes}
          >
            Jackets & Coats
          </Sections>
        )}
        {genderSizes === "men" && (
          <Sections clothingSizes={menClothingSizes} onClick={setMenTopsSizes}>
            Tops
          </Sections>
        )}
        {genderSizes === "men" && (
          <Sections clothingSizes={menClothingSizes} onClick={setMenPantsSizes}>
            Pants
          </Sections>
        )}
        {genderSizes === "men" && (
          <Sections
            clothingSizes={menClothingSizes}
            onClick={setMenJacketsSizes}
          >
            Jackets & Coats
          </Sections>
        )}
      </SecContainer>
      <TablesContainer>
        <SizeTableContainer>
          <SizeTable />
        </SizeTableContainer>

        <EquivalencesTable>Conversion Table</EquivalencesTable>
      </TablesContainer>
      <SchemaContainer>
        <FrontSchema></FrontSchema>
        <BackSchema></BackSchema>
      </SchemaContainer>
    </Container>
  );
};

export default SizeGuideModal;
