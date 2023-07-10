import update from 'immutability-helper'
import {
  ACTIVE_BUTTON,
  DISABLE_BUTTON,
  INCREMENT_POINTS,
  INCREMENT_STAT } from "../types"


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
      return update(state, {
        [action.statName]: {$set: state[action.statName] + 1},
        points: {$set: state.points - 1}
      })
    case INCREMENT_POINTS:
      return update(state, {
        points: {$set: state.points + 5}
      })
    case DISABLE_BUTTON:
      return update(state, {
        isButtonDisabled: {$set: true}
      })
    case ACTIVE_BUTTON:
      return update(state, {
        isButtonDisabled: {$set: false}
      })
    default:
      return state
  }
}