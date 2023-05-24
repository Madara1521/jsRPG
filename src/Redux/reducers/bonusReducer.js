import { SET_ARMOR_BONUS } from "../types"


const initialState = {
  weaponBonus: {
    startPhyBonus: 10,
    finalPhyBonus: 20
  },
  armorBonus: {
    strength: 0,
    dexterity: 0,
    vitality: 0,
    energy: 0
  },
  amuletBonus: {
    strength: 4,
    dexterity: 3
  }
}

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARMOR_BONUS:
      return {
        ...state,
        armorBonus: state.armorBonus.strength
      }
    default:
      return state
  }
}