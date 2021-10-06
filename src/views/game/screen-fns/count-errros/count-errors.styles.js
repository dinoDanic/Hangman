import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  top: 15px;
  right: 260px;
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  width: 200px;
  transform: rotate(-5deg);
`;
export const HoldInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 46px;
  transform: rotate(-1deg);
`;
export const Title = styled.div``;
export const ErrorsLeft = styled.div`
  font-size: ${(props) => props.theme.spacing.font.xxl};
  color: ${(props) => props.theme.colors.ui.danger};
  display: flex;
  margin-top: -10px;
  justify-content: center;
`;
