import styled from "styled-components";

export const Wrap = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  overflow: auto;
  gap: 5%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.size.screen.sm} {
    width: 100%;
    gap: 0;
    justify-content: flex-start;
  }
`;
