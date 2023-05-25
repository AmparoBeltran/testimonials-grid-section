import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }
    
  *{
    box-sizing: border-box;
  }
    

  body {
    display: grid;
  place-content: center;
  min-height: 100vh;
    width: 100vw;

    margin: 0 auto;
    font-family: 'Barlow Semi Condensed';  
    font-size: 13px;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  }

  
  

`;

export default GlobalStyles;
