import { INCREMENT_EXPERIENCE, UPDATE_LEVEL } from "../types"

const initialState = {
  level: 1,
  experience: 1000,
  nextLevel: 1500
}

export const levelReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
        nextLevel: state.nextLevel + 1000
      }
    case INCREMENT_EXPERIENCE:
      return {
        ...state,
        experience: state.experience + 50
      }
    default:
      return state
  }
}