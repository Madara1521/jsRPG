import update from 'immutability-helper'

import { 
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE } from "../types"

const initialState = {
  allDefense: 0,
  amuletBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
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
  },
  weaponBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    startPhyBonus: null,
    finalPhyBonus: null,
    attackRatingBonus: null
  },
  armorBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
  },
  shieldBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    blockingBonus: null,
    defenseBonus: null
  },
  ringBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
  },
  beltBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
  },
  secondRingBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
  },
  glovesBonus: {
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    defenseBonus: null
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
        allDefense: { $set: state.armorBonus.defenseBonus +
            state.bootsBonus.defenseBonus +
            state.glovesBonus.defenseBonus +
            state.shieldBonus.defenseBonus +
            state.helmetBonus.defenseBonus +
            state.beltBonus.defenseBonus }
      })
    default:
      return state
  }
}