import React from "react";
import { useSelector } from "react-redux";

import WeaponImg from "../../../img/weapon.svg";
import HeadImg from "../../../img/man/head.svg";
import BodyImg from "../../../img/man/body.svg";
import ArmRightImg from "../../../img/man/armRight.svg";
import ArmLeftImg from "../../../img/man/armLeft.svg";
import LegRightImg from "../../../img/man/legRight.svg";
import LegLeftImg from "../../../img/man/legLeft.svg";
import BubbleImg from "../../../img/bubble.svg";
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
  Message,
  Bubble,
  MessageText,
} from "./stickman.styles";

const Stickman = () => {
  const errors = useSelector((state) => state.controls.errors);
  return (
    <Wrap>
      <HoldScene>
        <Weapon src={WeaponImg} />
        {errors > 0 && <Head src={HeadImg} />}
        {errors > 1 && <Body src={BodyImg} />}
        {errors > 2 && <ArmRight src={ArmRightImg} />}
        {errors > 3 && <ArmLeft src={ArmLeftImg} />}
        {errors > 4 && <LegRight src={LegRightImg} />}
        {errors > 4 && (
          <Message
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 2 } }}
          >
            <Bubble src={BubbleImg} />
            <MessageText>help</MessageText>
          </Message>
        )}
        {errors > 5 && <LegLeft src={LegLeftImg} />}
      </HoldScene>
    </Wrap>
  );
};

export default Stickman;
