import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, sans-serif;
  }

  body {
    margin: 0;
    background-color: #8a91a4;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    :focus {
      outline: none;
    }
  }
`

export default GlobalStyle
