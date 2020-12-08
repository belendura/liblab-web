import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  overflow:   scroll;
  height:100%;
}

body {
  font-family: "Merriweather Sans", sans-serif;
  margin: auto 0;
 height:100%;


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
