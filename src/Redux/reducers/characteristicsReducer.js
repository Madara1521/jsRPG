import {
  PHYSICAL_DAMAGE,
  SET_TOTAL_STAT,
} from "../types"


const initialState = {
  totalStrength: 0,
  totalDexterity: 0,
  totalVitality: 0,
  totalEnergy: 0,

  startPhyDamage: 5,
  finalPhyDamage: 10,


}

export const characteristicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_STAT:
      return {
        ...state,
        [action.totalStatName]: action.current + action.bonusAttribute
      }
    case PHYSICAL_DAMAGE:
      return {
        ...state,
        startPhyDamage: state.startPhyDamage + action.startPhyBonus,
        finalPhyDamage: state.finalPhyDamage + action.finalPhyBonus
      }
    default:
      return state
  }
}