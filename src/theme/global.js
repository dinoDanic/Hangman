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
  .sentance {
    .word {
      &:first-child{
        .letter {
          &:first-child{
              text-transform: uppercase;
          }
        }
      }
    }
  } 
  .complete {
    .sentance {
      &:nth-child(n+2){
        .word {
          &:nth-child(2){
            .letter {
              &:first-child{
                  text-transform: uppercase;
              }
            }   
          }
        }
      }
    }
  }
`;

export default GlobalStyle;
