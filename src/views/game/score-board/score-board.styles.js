import styled from "styled-components";
import { motion } from "framer-motion";
import bgImg from "../../../img/bg2.png";

export const Wrap = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 500px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: -60px;
`;

export const Paper = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  background-image: url(${bgImg});
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px;
  border-radius: 20px;
  padding: ${(props) => props.theme.spacing.padding.lg};
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.spacing.font.lg};
`;

export const Loading = styled.div``;
