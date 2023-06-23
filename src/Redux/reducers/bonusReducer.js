import update from 'immutability-helper'

import {
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS
} from "../types"

const initialState = {
  allDefenseBonus: 0,
  allAttackRatingBonus: 0,
  allStartPhyBonus: 0,
  allFinalPhyBonus: 0,

  amuletBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    attackRatingBonus: null,
  },
  helmetBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
  },
  secondAmuletBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    attackRatingBonus: null,
  },
  weaponBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    startPhysicalDamage: null,
    finalPhysicalDamage: null,
    attackRatingBonus: null,
    oneHanded: null,
    twoHanded: null
  },
  secondWeaponBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    startPhysicalDamage: null,
    finalPhysicalDamage: null,
    attackRatingBonus: null,
    oneHanded: null,
    twoHanded: null
  },
  armorBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  shieldBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    blockingBonus: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  ringBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  beltBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  secondRingBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  glovesBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null,
    attackRatingBonus: null,
  },
  bootsBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
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
        allDefense: {
          $set: state.armorBonus.defenseBonus +
            state.bootsBonus.defenseBonus +
            state.glovesBonus.defenseBonus +
            state.shieldBonus.defenseBonus +
            state.helmetBonus.defenseBonus +
            state.beltBonus.defenseBonus
        }
      })
    case SET_ALL_ATTACK_RATING:
      return update(state, {
        allAttackRatingBonus: {
          $set: state.amuletBonus.attackRatingBonus +
            state.secondAmuletBonus.attackRatingBonus +
            state.weaponBonus.attackRatingBonus +
            state.armorBonus.attackRatingBonus +
            state.shieldBonus.attackRatingBonus +
            state.ringBonus.attackRatingBonus +
            state.beltBonus.attackRatingBonus +
            state.secondRingBonus.attackRatingBonus +
            state.glovesBonus.attackRatingBonus
        }
      })
    case SET_ALL_PHY_BONUS:
      return update(state, {
        allStartPhyBonus: {
          $set:
            state.weaponBonus.startPhysicalDamage +
            state.secondWeaponBonus.startPhysicalDamage
        },
        allFinalPhyBonus: {
          $set:
            state.weaponBonus.finalPhysicalDamage +
            state.secondWeaponBonus.finalPhysicalDamage
        }

      })
    default:
      return state
  }
}