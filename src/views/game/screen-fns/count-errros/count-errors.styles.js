import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  top: 15px;
  right: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.size.screen.sm} {
    left: -20px;
    top: 80px;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  width: 160px;
  transform: rotate(-5deg);
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;
export const HoldInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 46px;
  transform: rotate(-1deg);
`;
export const Title = styled.div``;
export const ErrorsLeft = styled.div`
  font-size: ${(props) => props.theme.spacing.font.xl};
  color: ${(props) => props.theme.colors.ui.danger};
  display: flex;
  margin-top: -10px;
  justify-content: center;
`;
