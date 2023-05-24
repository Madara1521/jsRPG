import {
  INCREMENT_EXPERIENCE,
  RANK_UPDATE,
  UPDATE_LEVEL
} from "../types"

const initialState = {
  level: 9,
  experience: 0,
  nextLevel: 500,
  rank: 'Peasant'
}

export const levelReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
        nextLevel: state.nextLevel + action.experience
      }
    case INCREMENT_EXPERIENCE:
      return {
        ...state,
        experience: state.experience + 250
      }
    case RANK_UPDATE:
      return {
        ...state,
        rank: action.rank
      }
    default:
      return state
  }
}