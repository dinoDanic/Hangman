import styled from "styled-components";

export const MyInput = styled.input`
  padding: 0 ${(props) => props.theme.spacing.padding.lg};
  font-size: ${(props) => props.theme.size.font.md};
  background-color: transparent;
  border: none;
  /* border-bottom: 1px solid purple; */
  outline: none;
  color: ${(props) => props.theme.colors.ui.primary};
  text-align: center;
`;
