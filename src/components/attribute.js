import SpellContinuous from '../assets/images/SpellContinuous.png';
import SpellEquip from '../assets/images/SpellEquip.png';
import SpellField from '../assets/images/SpellField.png';
import SpellNormal from '../assets/images/SpellNormal.png';
import SpellQuickPlay from '../assets/images/SpellQuickPlay.png';
import SpellRitual from '../assets/images/SpellRitual.png';
import TrapContinuous from '../assets/images/TrapContinuous.png';
import TrapCounter from '../assets/images/TrapCounter.png';
import TrapNormal from '../assets/images/TrapNormal.png';
import MonsterDARK from '../assets/images/MonsterDARK.png';
import MonsterDIVINE from '../assets/images/MonsterDIVINE.png';
import MonsterEARTH from '../assets/images/MonsterEARTH.png';
import MonsterFIRE from '../assets/images/MonsterFIRE.png';
import MonsterLIGHT from '../assets/images/MonsterLIGHT.png';
import MonsterWATER from '../assets/images/MonsterWATER.png';
import MonsterWIND from '../assets/images/MonsterWIND.png';

const attribute = (card) => {
  if (card.type === 'Spell Card') {
    switch (card.race) {
      case 'Normal':
        return SpellNormal;
      case 'Field':
        return SpellField;
      case 'Equip':
        return SpellEquip;
      case 'Continuous':
        return SpellContinuous;
      case 'Quick-Play':
        return SpellQuickPlay;
      case 'Ritual':
        return SpellRitual;
    }
  } else if (card.type === 'Trap Card') {
    switch (card.race) {
      case 'Normal':
        return TrapNormal;
      case 'Continuous':
        return TrapContinuous;
      case 'Counter':
        return TrapCounter;
    }
  } else if (card.type === 'Skill Card') {
    return undefined;
  } else {
    switch (card.attribute) {
      case 'DARK':
        return MonsterDARK;
      case 'DIVINE':
        return MonsterDIVINE;
      case 'EARTH':
        return MonsterEARTH;
      case 'FIRE':
        return MonsterFIRE;
      case 'LIGHT':
        return MonsterLIGHT;
      case 'WATER':
        return MonsterWATER;
      case 'WIND':
        return MonsterWIND;
    }
  }
};
export default attribute;
