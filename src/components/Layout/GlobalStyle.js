import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, sans-serif;

    --spacing-modifier: 3;

    @media screen and (max-width: 1000px) {
      --spacing-modifier: 2;
    }

    @media screen and (max-width: 700px) {
      --spacing-modifier: 1;
    }

    --title-color: #0f0721;
    --background-color-alternate: #e1e4ed;
    --text-color: #646773;
    --color-light: #e1e6f0;

  }

  body {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
    font-weight: bold;

    :focus {
      outline: none;
    }
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  h2 {
    margin: 0;
    font-size: 2.25rem;
  }

  h3 {
    margin: 0;
    font-size: 2rem;
  }

  h4 {
    margin: 0;
    font-size: 1.75rem;
  }

  h5 {
    margin: 0;
    font-size: 1.5rem;
  }

  h6 {
    margin: 0;
    font-size: 1rem;
  }
`

export default GlobalStyle
