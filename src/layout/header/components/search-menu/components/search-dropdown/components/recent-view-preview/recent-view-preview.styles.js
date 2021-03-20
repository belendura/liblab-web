import styled from "styled-components";


export const Container=styled.div`
flex: 1;
display:flex;
align-items:center;
justify-content:space-between;
margin:2.5px;
cursor:pointer;
&:hover, &:focus{
  background-color: rgba(215,206,179,0.2)
}

` 

export const PictureContainer = styled.div`
width:30px;
 position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Description=styled.span`
font-size:8px;
text-transform:capitalize;
margin-left:2.5px;
`