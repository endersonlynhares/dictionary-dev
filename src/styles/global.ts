import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background: ${props => props.theme.colors["base-background"]};
    font-size: 1.6rem;
    font-family:"Lora", sans-serif;
  }

  input, button, textarea{
    font-family:"Lora", sans-serif
  }


`