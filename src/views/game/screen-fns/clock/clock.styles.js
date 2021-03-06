import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  right: 30px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  @media ${(props) => props.theme.size.screen.sm} {
    left: 70px;
    top: -30px;
    right: auto;
  }
`;

export const Img = styled.img`
  width: 175px;
  transform: rotate(5deg);
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;

export const Time = styled.div`
  position: absolute;
  font-size: ${(props) => props.theme.size.font.xl};
  color: ${(props) => props.theme.colors.ui.success};
  top: 63px;
`;

export const Text = styled.div`
  position: absolute;
  margin-top: 45px;
  font-size: ${(props) => props.theme.size.font.md};
`;
