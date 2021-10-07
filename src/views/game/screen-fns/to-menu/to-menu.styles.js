import styled from "styled-components";

export const Wrap = styled.div`
  width: 120px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;
export const HomeArrow = styled.img`
  width: 100%;
  transform: rotate(180deg);
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    transform: translateX(-10px) rotate(170deg);
  }
  &:active {
    transform: translateX(-20px) rotate(160deg);
  }
`;

export const PointerArrow = styled.img`
  position: absolute;
  opacity: 0.2;
  width: 20px;
  transform: rotate(-140deg);
  top: -80px;
  left: 70px;
`;

export const Back = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  opacity: 0.2;
  position: absolute;
  top: -130px;
  right: -10px;
  transform: rotate(17deg);
`;
