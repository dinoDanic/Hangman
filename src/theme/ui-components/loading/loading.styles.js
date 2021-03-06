import styled from "styled-components";
import { motion } from "framer-motion";
import BgImg from "../../../img/bg1.png";
export const Wrap = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 200;
  background-image: url(${BgImg});
`;

export const Load = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadImg = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;
