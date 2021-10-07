import styled from "styled-components";
import { motion } from "framer-motion";
import bgImg from "../../../img/bg2.png";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  background-image: url(${bgImg});
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  div {
    margin: 20px 0;
  }
`;
export const Title = styled.div`
  font-size: ${(props) => props.theme.size.font.lg};
`;

export const Message = styled.div``;
