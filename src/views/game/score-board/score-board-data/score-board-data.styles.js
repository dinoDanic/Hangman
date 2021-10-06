import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; ;
`;
export const Title = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.spacing.font.lg};
`;

export const Table = styled.div`
  display: flex;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
`;
