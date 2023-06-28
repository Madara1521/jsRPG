import update from 'immutability-helper'

import {
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS,
} from "../types"



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
  secondAmuletBonus: {
    info: {
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      attackRatingBonus: null,
    },
    requirements: {

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
    info:{
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
    info:{
      id: null,
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      startPhysicalDamage: null,
      finalPhysicalDamage: null,
      oneHanded: false,
      twoHanded: false,
      blockingBonus: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {
      requiredLevel: null,
      requiredStrength: null,
      requiredDexterity: null,
      typeShield: null,
    }
  },
  ringBonus: {
    info:{
      strength: null,
      dexterity: null,
      vitality: null,
      energy: null,
      defenseBonus: null,
      attackRatingBonus: null,
    },
    requirements: {

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
}

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_BONUS:
      return update(state, {
        [action.typeItem]: {$set: action.bonus }
      })
    case SET_ALL_DEFENSE:
      return update(state, {
        allDefenseBonus: {
          $set: state.armorBonus.info.defenseBonus +
            state.bootsBonus.info.defenseBonus +
            state.glovesBonus.info.defenseBonus +
            state.shieldBonus.info.defenseBonus +
            state.helmetBonus.info.defenseBonus +
            state.beltBonus.info.defenseBonus
        }
      })
    case SET_ALL_ATTACK_RATING:
      return update(state, {
        allAttackRatingBonus: {
          $set: state.amuletBonus.info.attackRatingBonus +
            state.secondAmuletBonus.info.attackRatingBonus +
            state.weaponBonus.info.attackRatingBonus +
            state.secondWeaponBonus.info.attackRatingBonus +
            state.armorBonus.info.attackRatingBonus +
            state.shieldBonus.info.attackRatingBonus +
            state.ringBonus.info.attackRatingBonus +
            state.beltBonus.info.attackRatingBonus +
            state.secondRingBonus.info.attackRatingBonus +
            state.glovesBonus.info.attackRatingBonus
        }
      })
    case SET_ALL_PHY_BONUS:
      return update(state, {
        allStartPhyBonus: {
          $set:
            state.weaponBonus.info.startPhysicalDamage +
            state.secondWeaponBonus.info.startPhysicalDamage +
            state.shieldBonus.info.startPhysicalDamage
        },
        allFinalPhyBonus: {
          $set:
            state.weaponBonus.info.finalPhysicalDamage +
            state.secondWeaponBonus.info.finalPhysicalDamage +
            state.shieldBonus.info.finalPhysicalDamage 
        }

      })
    default:
      return state
  }
}