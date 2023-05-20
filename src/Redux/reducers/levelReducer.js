import { INCREMENT_EXPERIENCE, RANK_UPDATE10, RANK_UPDATE20, RANK_UPDATE40, RANK_UPDATE60, UPDATE_LEVEL } from "../types"

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
    case RANK_UPDATE10:
      return {
        ...state,
        rank: 'Recruit'
      }
    case RANK_UPDATE20:
      return {
        ...state,
        rank: 'Guardian'
      }
    case RANK_UPDATE40:
      return {
        ...state,
        rank: 'Warrior'
      }
    case RANK_UPDATE60:
      return {
        ...state,
        rank: 'Knight'
      }
    default:
      return state
  }
}