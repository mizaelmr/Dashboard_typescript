import { createGlobalStyle } from "styled-components";

export const colors = {
  blue: "#019bbe",
  grey: "#e8e8e8",
  ligthGrey: "#f5f5f5",
  white: "#fff",
  lightWhite: "#ffffff20",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh ;
    padding: 0;
    background: ${colors.ligthGrey};
  }  
`;

export default GlobalStyle;
