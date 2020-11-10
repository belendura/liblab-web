import styled, { css } from "styled-components";
import { ReactComponent as CloseLogo } from "../../../assets/icons/close-logo.svg";

const selectedStyles = css`
  color: rgba(39, 40, 42, 0.7);
  text-decoration: underline;
`;

const getCollectionStyles = (props) => {
  const { genderSizes, children } = props;
  return genderSizes === children ? selectedStyles : null;
};

const getSectionStyles = (props) => {
  const { clothingSizes, children } = props;
  if (children !== "Jackets & Coats")
    return clothingSizes.includes(children) ? selectedStyles : null;
  else
    return clothingSizes.includes(children.slice(0, 7)) ? selectedStyles : null;
};

export const Container = styled.div`
  width: 50vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const CloseButton = styled(CloseLogo)`
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  margin: 10px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
`;

export const ColContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin solid black;
`;

export const Collections = styled.h2`
  color: rgba(39, 40, 42, 1);
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(39, 40, 42, 0.7);
    text-decoration: underline;
  }
  ${getCollectionStyles}
`;

export const SecContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: thin solid black;
`;

export const Sections = styled.h2`
  color: rgba(39, 40, 42, 1);
  font-size: 12px;
  text-transform: uppercase;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(39, 40, 42, 0.7);
    text-decoration: underline;
  }
  ${getSectionStyles}
`;

export const TablesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: thin solid black;
`;

export const SizeTableContainer = styled.div`
  border: thin solid black;
`;

export const EquivalencesTable = styled.div`
  border: thin solid black;
`;
export const SchemaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: thin solid black;
`;

export const FrontSchema = styled.div`
  border: thin solid black;
`;

export const BackSchema = styled.div`
  border: thin solid black;
`;
