import update from 'immutability-helper'
import {
  INCREMENT_EXPERIENCE,
  RANK_UPDATE,
  UPDATE_LEVEL } from "../types"

const initialState = {
  level: 1,
  experience: 0,
  nextLevel: 500,
  rank: 'Peasant'
}

export const levelReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LEVEL:
      return update(state, {
        level: {$set: state.level + 1},
        nextLevel: {$set: state.nextLevel + action.experience}
      })
    case INCREMENT_EXPERIENCE:
      return update(state, {
        experience: {$set: state.experience + 250}
      })
    case RANK_UPDATE:
      return update(state,{
        rank: {$set: action.rank}
      })
    default:
      return state
  }
}