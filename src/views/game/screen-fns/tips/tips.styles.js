import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;

export const Computer = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.5;
  transform: rotate(-20deg);
  top: 20px;
  width: 100px;
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  position: absolute;
  opacity: 0.2;
  width: 200px;
  top: 95px;
  left: 40px;
  transform: rotate(-20deg);
`;

export const Arrow = styled.img`
  width: 30px;
  opacity: 0.5;
  position: absolute;
  top: 70px;
  left: 60px;
`;
