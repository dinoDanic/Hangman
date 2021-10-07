import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media ${(props) => props.theme.size.screen.sm} {
    position: fixed;
    bottom: 0;
    background-color: beige;
  }
`;
