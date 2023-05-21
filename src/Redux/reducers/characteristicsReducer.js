import {
  TOTAL_DEXTERITY,
  TOTAL_ENERGY,
  TOTAL_STRENGTH,
  TOTAL_VITALITY
} from "../types"


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
        totalStrength: action.total
      }
    case TOTAL_DEXTERITY:
      return {
        ...state,
        totalDexterity: action.total
      }
    case TOTAL_VITALITY:
      return {
        ...state,
        totalVitality: action.total
      }
    case TOTAL_ENERGY:
      return {
        ...state,
        totalEnergy: action.total
      }
    default:
      return state
  }
}