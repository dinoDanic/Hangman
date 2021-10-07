import styled from "styled-components";

const space = (theme) => `
    opacity: 0;
`;

const special = () => `
    border:none !important;
    width: fit-content !important;
`;

const variants = {
  space,
  special,
};

export const TheLetter = styled.div`
  ${({ variant, theme }) => variant && variants[variant](theme)};
  border-bottom: 3px solid ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.size.font.lg};
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  height: 50px;
  width: 20px;
`;
