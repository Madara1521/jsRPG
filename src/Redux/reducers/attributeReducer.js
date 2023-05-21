import {
  ACTIVE_BUTTON,
  DISABLE_BUTTON,
  INCREMENT_DEXTERITY,
  INCREMENT_ENERGY,
  INCREMENT_POINTS,
  INCREMENT_STRENGTH,
  INCREMENT_VITALITY
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
    case INCREMENT_STRENGTH:
      return {
        ...state,
        strength: state.strength + 1,
        points: state.points - 1
      }
    case INCREMENT_DEXTERITY:
      return {
        ...state,
        dexterity: state.dexterity + 1,
        points: state.points - 1
      }
    case INCREMENT_VITALITY:
      return {
        ...state,
        vitality: state.vitality + 1,
        points: state.points - 1
      }
    case INCREMENT_ENERGY:
      return {
        ...state,
        energy: state.energy + 1,
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