import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.blackColor ? "black" : "white")};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;
