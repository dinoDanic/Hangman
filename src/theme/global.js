import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Hi Melody', cursive;
    }
    body {
        
        font-size: ${(props) => props.theme.spacing.font.md}
    }

`;

export default GlobalStyle;
