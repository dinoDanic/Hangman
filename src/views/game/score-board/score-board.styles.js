import styled from "styled-components";
import { motion } from "framer-motion";
import bgImg from "../../../img/bg2.png";

export const Wrap = styled(motion.div)`
  position: absolute;
  height: 100vh;
  min-width: 600px;
  width: 700px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media ${(props) => props.theme.size.screen.sm} {
    max-width: 0px;
    min-width: 100%;
    left: 0;
    top: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-top: -60px;
`;

export const Paper = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  background-image: url(${bgImg});
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px;
  border-radius: 20px;
  padding: ${(props) => props.theme.spacing.padding.lg};
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  @media ${(props) => props.theme.size.screen.sm} {
    height: 100%;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.size.font.lg};
`;

export const Loading = styled.div``;

export const Rules = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBoard = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${(props) => props.theme.size.font.md};
  cursor: pointer;
  &:hover {
    transform: scale(1.3) rotate(10deg);
  }
`;
