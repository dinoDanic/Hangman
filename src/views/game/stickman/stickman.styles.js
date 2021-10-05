import styled, { css } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const HoldScene = styled.div`
  position: relative;
`;

export const Weapon = styled.img``;

const bodyParts = css`
  position: absolute;
  width: 60px;
`;

export const Head = styled.img`
  ${bodyParts};
  right: -30px;
  top: 32px;
`;

export const Body = styled.img`
  ${bodyParts};
  right: -33px;
  top: 90px;
`;

export const ArmRight = styled.img`
  ${bodyParts};
  width: 33px;
  top: 100px;
  right: -48px;
`;
export const ArmLeft = styled.img`
  ${bodyParts};
  width: 29px;
  right: 17px;
  top: 100px;
`;
export const LegRight = styled.img`
  ${bodyParts};
  top: 190px;
  width: 36px;
  right: -47px;
`;
export const LegLeft = styled.img`
  ${bodyParts};
  top: 192px;
  right: 0;
  width: 33px;
`;
