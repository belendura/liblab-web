import styled from "styled-components";

export const Container = styled.div`
  max-width: 997px;
  height: 30px;
  /*gotbackground-image: url(https://firebasestorage.googleapis.com/v0/b/liblab-web.appspot.com/o/Backgrounds%2FLeopard_Print_Background.jpg?alt=media&token=68ee7db2-c70a-4878-ac8d-dae62d77a74e);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;*/
  background: rgba(107, 111, 115, 0.4);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TickerContainer = styled.div`
  width: 100%;
`;

export const MainText = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

export const SecondaryText = styled.span`
  font-size: 10px;
  color: white;
`;
