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
  z-index: 999;
  background-image: url(${BgImg});
`;

export const Load = styled(motion.div)``;
