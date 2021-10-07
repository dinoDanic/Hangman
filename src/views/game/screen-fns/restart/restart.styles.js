import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  width: 70px;
  height: 60px;
  &:hover {
    &:after {
      content: "Restart";
      font-size: ${(props) => props.theme.size.font.md};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      bottom: -36px;
      position: absolute;
      opacity: 0;
    }
  }
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;
export const Img = styled(motion.img)`
  width: 100%;
  cursor: pointer;
  position: absolute;
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.2rem;
  position: absolute;
  top: -120px;
  left: -90px;
  transform: rotate(-20deg);
  opacity: 0.2;
`;

export const Arrow = styled.img`
  position: absolute;
  top: -70px;
  left: -23px;
  width: 30px;
  opacity: 0.5;
`;
