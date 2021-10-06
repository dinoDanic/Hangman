import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.primary}, cursive;
    }
    body {
        
        font-size: ${(props) => props.theme.spacing.font.md}
    }
    ${
      "" /* .sentance {
        &:after {
            content: ".";
            font-size: ${(props) => props.theme.spacing.font.lg};
        }
        &:last-child {
            display: none !important;
        }
        .word {
            &:first-child{
                .letter {
                    &:first-child{
                        text-transform: uppercase;
                    }
                }
            }
        }
      
    } */
    }
    ${
      "" /* .wordWrap {
        .oneSentance {
            &:last-child{
                display: none;
            }
            .oneWord {
                &:first-child {
                    text-transform: uppercase;
                }
            }
        }
    } */
    }

`;

export default GlobalStyle;
