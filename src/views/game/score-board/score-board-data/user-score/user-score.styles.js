import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  font-size: ${(props) => props.theme.spacing.font.md};
`;
const item = css`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const UserName = styled.div`
  ${item};
  justify-content: flex-start;
  flex: 1.2;
`;
export const Errors = styled.div`
  ${item};
`;
export const Length = styled.div`
  ${item};
`;
export const UniqChar = styled.div`
  ${item};
`;
export const Duration = styled.div`
  ${item};
`;
