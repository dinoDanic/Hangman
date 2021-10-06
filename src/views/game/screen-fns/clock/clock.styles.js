import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Img = styled.img`
  width: 220px;
  transform: rotate(5deg);
`;

export const Time = styled.div`
  position: absolute;
  font-size: ${(props) => props.theme.spacing.font.xl};
  color: ${(props) => props.theme.colors.ui.success};
  top: 80px;
`;

export const Text = styled.div`
  position: absolute;
  margin-top: 45px;
  font-size: ${(props) => props.theme.spacing.font.md};
`;
