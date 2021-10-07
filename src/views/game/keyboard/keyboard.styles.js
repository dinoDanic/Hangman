import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media ${(props) => props.theme.size.screen.sm} {
    background-color: beige;
    margin-top: 0;
    flex: 0.2;
  }
`;
