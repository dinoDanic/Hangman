import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  left: 20px;
  top: 170px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Img = styled.img``;

export const Time = styled.div`
  position: absolute;
  font-size: ${(props) => props.theme.spacing.font.lg};
  color: ${(props) => props.theme.colors.ui.success};
  transform: rotate(-7deg);
  top: 100px;
`;

export const Text = styled.div`
  position: absolute;
  margin-top: 45px;
  margin-left: -25px;
  font-size: ${(props) => props.theme.spacing.font.md};
  transform: rotate(-10deg);
`;
