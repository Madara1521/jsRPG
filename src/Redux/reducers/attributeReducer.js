import { INCREMENT_DEXTERITY, INCREMENT_STRENGTH } from "../types"


const initialState = {
  strength: 5,
  dexterity: 5,
}

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STRENGTH:
      return {
        ...state,
        strength: state.strength + action.strength
      }
    case INCREMENT_DEXTERITY:
      return {
        ...state,
        dexterity: state.dexterity + action.dexterity
      }
    default:
      return state
  }
}