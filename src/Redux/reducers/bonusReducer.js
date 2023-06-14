import { SET_HELMET_BONUS } from "../types"

const initialState = {
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
    blockingBonus: null
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
    case SET_HELMET_BONUS:
      return {
        ...state,
        helmetBonus: action.helmetBonus
      }
    default:
      return state
  }
}