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

export const OneSentance = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:after {
    display: flex;
    content: ".";
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 16px;
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
  &:first-child {
    div {
      &:first-child {
        /*  text-transform: uppercase; */
      }
    }
  }
`;
