import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.spacing.font.xl};
  margin-bottom: 30px;
`;

export const Message = styled.div``;
