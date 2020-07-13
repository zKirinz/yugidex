import React from 'react';
import XYZMonster from '../assets/images/XYZMonster.jpg';
import XYZPendulumEffectMonster from '../assets/images/XYZPendulumEffectMonster.jpg';
import SynchroMonster from '../assets/images/SynchroMonster.jpg';
import SynchroPendulumEffectMonster from '../assets/images/SynchroPendulumEffectMonster.jpg';
import RitualMonster from '../assets/images/RitualMonster.jpg';
import FusionMonster from '../assets/images/FusionMonster.jpg';
import PendulumEffectFusionMonster from '../assets/images/PendulumEffectFusionMonster.jpg';
import LinkMonster from '../assets/images/LinkMonster.jpg';
import EffectMonster from '../assets/images/EffectMonster.jpg';
import PendulumEffectMonster from '../assets/images/PendulumEffectMonster.jpg';
import PendulumNormalMonster from '../assets/images/PendulumNormalMonster.jpg';
import NormalMonster from '../assets/images/NormalMonster.jpg';
import SkillCard from '../assets/images/SkillCard.jpg';
import SpellCard from '../assets/images/SpellCard.jpg';
import TrapCard from '../assets/images/TrapCard.jpg';

const miniCardImage = cardType=> {
  switch (cardType) {
    case "Skill Card":
      return SkillCard;
    case "Spell Card":
      return SpellCard;
    case "Trap Card":
      return TrapCard;
    case "Fusion Monster":
      return FusionMonster;
    case "Pendulum Effect Fusion Monster":
      return PendulumEffectFusionMonster;
    case "Link Monster":
      return LinkMonster;
    case "XYZ Monster":
      return XYZMonster;
    case "XYZ Pendulum Effect Monster":
      return XYZPendulumEffectMonster;
    case "Synchro Monster":
    case "Synchro Tuner Monster":
      return SynchroMonster;
    case "Synchro Pendulum Effect Monster":
      return SynchroPendulumEffectMonster;
    case "Effect Monster":
    case "Flip Effect Monster":
    case "Gemini Monster":
    case "Spirit Monster":
    case "Toon Monster":
    case "Tuner Monster":
    case "Union Effect Monster":
      return EffectMonster;
    case "Normal Monster":
    case "Normal Tuner Monster":
      return NormalMonster;
    case "Pendulum Effect Monster":
    case "Pendulum Flip Effect Monster":
    case "Pendulum Tuner Effect Monster":
      return PendulumEffectMonster;
    case "Pendulum Normal Monster":
      return PendulumNormalMonster;
    case "Ritual Monster":
    case "Ritual Effect Monster":
      return RitualMonster;
  }
}
export default miniCardImage;