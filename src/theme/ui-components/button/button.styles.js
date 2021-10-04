import styled from "styled-components";

const notValid = (theme) => `
    cursor: not-allowed;
    opacity: 0.3;
`;

const isValid = (theme) => `
&:hover {
    color: ${theme.colors.ui.primary};
    transform: scale(1.1) rotate(-10deg);
  }
  &:active {
      color: ${theme.colors.ui.primary};
      transform: scale(1) rotate(0deg);
    }
`;

const defaultStyle = (theme) => `
font-size: ${theme.spacing.font.lg};
border: none;
background-color: transparent;
cursor: pointer;

`;

export const MyButton = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ valid, theme }) => (valid ? isValid(theme) : notValid(theme))}
`;

MyButton.defaultProps = {
  valid: true,
};
