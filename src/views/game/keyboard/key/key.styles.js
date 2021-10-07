import styled from "styled-components";

const usedPositive = () => `
    color: green !important;
    opacity: 0.5;
    transform: scale(0.7);
`;

const usedFalse = () => `
    color: red !important;
    opacity: 0.5;
    transform: scale(0.7);
`;

const variants = {
  usedPositive,
  usedFalse,
};

export const KeyboardKey = styled.div`
  ${({ variant }) => variant && variants[variant]}
  margin: 5px;
  font-size: ${(props) => props.theme.size.font.lg};
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    transform: scale(1.2) rotate(-10deg);
  }
  &:active {
    transform: scale(1) rotate(0deg);
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  pointer-events: none;
`;
