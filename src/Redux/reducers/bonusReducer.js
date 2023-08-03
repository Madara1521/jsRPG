import update from 'immutability-helper'

import {
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS,
  SET_ALL_BONUS_STAT,
} from "../types"
import { getSummaryParams } from '../../helpers/summaryHelper'



const initialState = {
  allDefenseBonus: 0,
  allAttackRatingBonus: 0,
  allStartPhyBonus: 0,
  allFinalPhyBonus: 0,
  allStrengthBonus: 0,
  allDexterityBonus: 0,
  allVitalityBonus: 0,
  allEnergyBonus: 0,

  amuletBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      typeAmulet: null,
    }
  },
  secondAmuletBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      typeAmulet: null,
    }
  },
  helmetBonus: {
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeHelmet: null,
    },
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
    }
  },
  weaponBonus: {
    info: {
      id: null,
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      startPhysicalDamage: null,
      finalPhysicalDamage: null,
      attackRatingBonus: null,
      oneHanded: false,
      twoHanded: false,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeWeapon: null,
    }
  },
  secondWeaponBonus: {
    info: {
      id: null,
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      startPhysicalDamage: null,
      finalPhysicalDamage: null,
      attackRatingBonus: null,
      oneHanded: false,
      twoHanded: false,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeWeapon: null,
    }
  },
  armorBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeArmor: null,
    }
  },
  shieldBonus: {
    info: {
      id: null,
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      startPhysicalDamage: null,
      finalPhysicalDamage: null,
      blockingBonus: null,
      defenseBonus: null,
      attackRatingBonus: null,
      oneHanded: false,
      twoHanded: false,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeShield: null,
    }
  },
  ringBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      typeRing: null,
    }
  },
  secondRingBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      typeRing: null,
    }
  },
  beltBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeBelt: null,
    }
  },
  glovesBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeGloves: null,
    }
  },
  bootsBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeBoots: null,
    }
  },
  otherBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null
    },
    requirements: {
      requiredLevel: null,
      typeOther: null,
    }
  },
}

const bonuses = [
  'amuletBonus',
  'secondAmuletBonus',
  'helmetBonus',
  'weaponBonus',
  'secondWeaponBonus',
  'armorBonus',
  'shieldBonus',
  'ringBonus',
  'secondRingBonus',
  'beltBonus',
  'glovesBonus',
  'bootsBonus',
  'otherBonus'
]

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_BONUS:
      return update(state, {
        [action.typeItem]: { $set: action.bonus }
      })
    case SET_ALL_DEFENSE:
      return update(state, {
        allDefenseBonus: { $set: getSummaryParams(initialState, bonuses, 'info.defenseBonus') }
      })
    case SET_ALL_ATTACK_RATING:
      return update(state, {
        allAttackRatingBonus: { $set: getSummaryParams(initialState, bonuses, 'info.attackRatingBonus') }
      })
    case SET_ALL_PHY_BONUS:
      return update(state, {
        allStartPhyBonus: { $set: getSummaryParams(initialState, bonuses, 'info.startPhysicalDamage') },
        allFinalPhyBonus: { $set: getSummaryParams(initialState, bonuses, 'info.finalPhysicalDamage') }
      })
    case SET_ALL_BONUS_STAT:
      return update(state, {
        allStrengthBonus: { $set: getSummaryParams(initialState, bonuses, 'info.strength') },
        allDexterityBonus: { $set: getSummaryParams(initialState, bonuses, 'info.dexterity') },
        allVitalityBonus: { $set: getSummaryParams(initialState, bonuses, 'info.vitality') },
        allEnergyBonus: { $set: getSummaryParams(initialState, bonuses, 'info.energy') }
      })
    default:
      return state
  }
}