import { TOTAL_DEXTERITY, TOTAL_STRENGTH } from "../types"


const initialState = {
  totalStrength: 0,
  totalDexterity: 0,
  totalVitality: 0,
  totalEnergy: 0,
}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_STRENGTH:
      return {
        ...state,
        totalStrength: action.strength
      }
    case TOTAL_DEXTERITY:
      return {
        ...state,
        totalDexterity: action.dexterity
      }
    default:
      return state
  }
}