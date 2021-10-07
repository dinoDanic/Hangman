import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled(motion.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    margin-top: 0px;
  }
`;
export const Form = styled.form`
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.size.font.xl};
  margin-bottom: 30px;
`;

export const Message = styled.div`
  font-size: ${(props) => props.theme.size.font.md};
  transform: rotate(-5deg);
  position: absolute;
  text-transform: uppercase;
  top: 50px;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const EnterName = styled.div`
  position: absolute;
  top: 100px;
  transform: rotate(-5deg);
  input {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
