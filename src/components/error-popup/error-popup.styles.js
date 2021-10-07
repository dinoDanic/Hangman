import { motion } from "framer-motion";

import styled from "styled-components";
import bgImg from "../../img/bg2.png";

export const Wrap = styled(motion.div)`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  z-index: 500;
`;

export const Info = styled(motion.div)`
  position: relative;
  width: fit-content;
  border-radius: 20px;
  flex-direction: column;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImg});
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px;
  z-index: 50;
`;

export const Paper = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 0 20px 20px 0;
`;

export const Message = styled.div`
  color: ${(props) => props.theme.colors.ui.danger};
`;

export const RedLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 20px;
`;

export const Title = styled.div``;
