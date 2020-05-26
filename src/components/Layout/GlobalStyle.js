import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, sans-serif;
  }

  body {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`

export default GlobalStyle
