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
      font-size: ${(props) => props.theme.spacing.font.md};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      bottom: -36px;
      position: absolute;
      opacity: 0;
    }
  }
`;
export const Img = styled(motion.img)`
  width: 100%;
  cursor: pointer;
  position: absolute;
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  position: absolute;
  top: -150px;
  left: -100px;
  transform: rotate(-20deg);
  opacity: 0.2;
`;

export const Arrow = styled.img`
  position: absolute;
  top: -100px;
  left: -40px;
  width: 50px;
  opacity: 0.5;
`;
