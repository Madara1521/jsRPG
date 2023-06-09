import update from 'immutability-helper'

import {
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS,
  SET_ALL_BONUS_STAT,
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

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_BONUS:
      return update(state, {
        [action.typeItem]: { $set: action.bonus }
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
    case SET_ALL_BONUS_STAT:
      return update(state, {
        allStrengthBonus: {
          $set:
            state.amuletBonus.info.strength +
            state.secondAmuletBonus.info.strength +
            state.helmetBonus.info.strength +
            state.weaponBonus.info.strength +
            state.secondWeaponBonus.info.strength +
            state.armorBonus.info.strength +
            state.shieldBonus.info.strength +
            state.ringBonus.info.strength +
            state.secondRingBonus.info.strength +
            state.beltBonus.info.strength +
            state.glovesBonus.info.strength +
            state.bootsBonus.info.strength +
            state.otherBonus.info.strength
        },
        allDexterityBonus: {
          $set:
          state.amuletBonus.info.dexterity +
          state.secondAmuletBonus.info.dexterity +
          state.helmetBonus.info.dexterity +
          state.weaponBonus.info.dexterity +
          state.secondWeaponBonus.info.dexterity +
          state.armorBonus.info.dexterity +
          state.shieldBonus.info.dexterity +
          state.ringBonus.info.dexterity +
          state.secondRingBonus.info.dexterity +
          state.beltBonus.info.dexterity +
          state.glovesBonus.info.dexterity +
          state.bootsBonus.info.dexterity +
          state.otherBonus.info.dexterity
        },
        allVitalityBonus: {
          $set:
          state.amuletBonus.info.vitality +
          state.secondAmuletBonus.info.vitality +
          state.helmetBonus.info.vitality +
          state.weaponBonus.info.vitality +
          state.secondWeaponBonus.info.vitality +
          state.armorBonus.info.vitality +
          state.shieldBonus.info.vitality +
          state.ringBonus.info.vitality +
          state.secondRingBonus.info.vitality +
          state.beltBonus.info.vitality +
          state.glovesBonus.info.vitality +
          state.bootsBonus.info.vitality +
          state.otherBonus.info.vitality
        },
        allEnergyBonus: {
          $set:
          state.amuletBonus.info.energy +
          state.secondAmuletBonus.info.energy +
          state.helmetBonus.info.energy +
          state.weaponBonus.info.energy +
          state.secondWeaponBonus.info.energy +
          state.armorBonus.info.energy +
          state.shieldBonus.info.energy +
          state.ringBonus.info.energy +
          state.secondRingBonus.info.energy +
          state.beltBonus.info.energy +
          state.glovesBonus.info.energy +
          state.bootsBonus.info.energy +
          state.otherBonus.info.energy
        }
      })
    default:
      return state
  }
}