import { INCREMENT_STRENGTH } from "../types"


const initialState = {
  strength: 5,
}

export const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STRENGTH:
      return {
        ...state,
        strength: state.strength + action.strength
      }
    default:
      return state
  }
}