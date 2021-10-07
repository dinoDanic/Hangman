import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Words = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Sentance = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &:after {
    display: flex;
    content: ".";
    justify-content: flex-end;
    align-items: flex-end;
    font-size: ${(props) => props.theme.size.font.lg};
    margin-bottom: 16px;
  }
  &:last-child {
    display: none !important;
  }
`;

export const OneWord = styled.div`
  display: flex;
  margin-right: 20px;
  justify-content: center;
  margin-bottom: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
