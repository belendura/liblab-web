import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  overflow:   scroll;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

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
