import {
  SET_PHYSICAL_DAMAGE,
  SET_TOTAL_STAT,
} from "../types"


const initialState = {
  totalStrength: 0,
  totalDexterity: 0,
  totalVitality: 0,
  totalEnergy: 0,

  startPhyDamage: 0,
  finalPhyDamage: 0,


}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_STAT:
      return {
        ...state,
        [action.totalStatName]: action.attributeCurrent + action.bonusAttribute
      }
    case SET_PHYSICAL_DAMAGE:
      return {
        ...state,
        startPhyDamage: (state.totalStrength * 4) + action.startPhyBonus,
        finalPhyDamage: (state.totalStrength * 6) + action.finalPhyBonus,
      }
    default:
      return state
  }
}