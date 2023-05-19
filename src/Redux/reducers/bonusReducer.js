import { ARMOR_BONUS } from "../types"


const initialState = {
  armorBonus: {
    strength: 3,
    dexterity: 4,
  },
  amuletBonus: {
    strength: 4,
    dexterity: 3
  }
}

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARMOR_BONUS:
      return {
        ...state,
        armorBonus: state.armorBonus.strength
      }
    default:
      return state
  }
}