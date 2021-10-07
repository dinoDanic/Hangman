import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  font-size: ${(props) => props.theme.size.font.md};
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
const mobile = css`
  @media ${(props) => props.theme.size.screen.sm} {
    display: none;
  }
`;
export const Errors = styled.div`
  ${item};
  ${mobile}
`;
export const Length = styled.div`
  ${item};
  ${mobile}
`;
export const UniqChar = styled.div`
  ${item};
  ${mobile}
`;
export const Duration = styled.div`
  ${item};
  ${mobile}
`;
export const GameScore = styled.div`
  ${item};
`;
