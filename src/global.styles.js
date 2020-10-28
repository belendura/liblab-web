import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: "Merriweather Sans", sans-serif;
  margin: auto 0;


  @media screen and (max-width: 800px){
      
    }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
