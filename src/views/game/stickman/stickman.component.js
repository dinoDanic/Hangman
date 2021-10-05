import React from "react";
import WeaponImg from "../../../img/weapon.svg";
import HeadImg from "../../../img/man/head.svg";
import BodyImg from "../../../img/man/body.svg";
import ArmRightImg from "../../../img/man/armRight.svg";
import ArmLeftImg from "../../../img/man/armLeft.svg";
import LegRightImg from "../../../img/man/legRight.svg";
import LegLeftImg from "../../../img/man/legLeft.svg";
import {
  Weapon,
  Wrap,
  HoldScene,
  Head,
  Body,
  ArmRight,
  ArmLeft,
  LegRight,
  LegLeft,
} from "./stickman.styles";

const Stickman = () => {
  return (
    <Wrap>
      <HoldScene>
        <Weapon src={WeaponImg} />
        <Head src={HeadImg} />
        <Body src={BodyImg} />
        <ArmRight src={ArmRightImg} />
        <ArmLeft src={ArmLeftImg} />
        <LegRight src={LegRightImg} />
        <LegLeft src={LegLeftImg} />
      </HoldScene>
    </Wrap>
  );
};

export default Stickman;
