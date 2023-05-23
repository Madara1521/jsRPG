import {
  ACTIVE_BUTTON,
  DISABLE_BUTTON,
  INCREMENT_POINTS,
  INCREMENT_STAT,
} from "../types"


const initialState = {
  points: 5,
  strength: 5,
  dexterity: 5,
  vitality: 5,
  energy: 5,
  isButtonDisabled: false
}

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STAT:
      return {
        ...state,
        [action.statName]: state[action.statName] + 1,
        points: state.points - 1
      }
    case INCREMENT_POINTS:
      return {
        ...state,
        points: state.points + 5
      }
    case DISABLE_BUTTON:
      return {
        ...state,
        isButtonDisabled: true
      }
    case ACTIVE_BUTTON:
      return {
        ...state,
        isButtonDisabled: false
      }
    default:
      return state
  }
}