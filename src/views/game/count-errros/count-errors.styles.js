import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
`;
export const HoldInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 36px;
  transform: rotate(8deg);
`;
export const Title = styled.div``;
export const ErrorsLeft = styled.div`
  font-size: ${(props) => props.theme.spacing.font.xxl};
  color: ${(props) => props.theme.colors.ui.danger};
  display: flex;
  justify-content: center;
`;
