import update from 'immutability-helper'
import { SET_ID_LOCATION, SET_TIMER } from '../types'

const initialState = {
  timer: -1,
  activeId: 1,
  locations: [
    {
      id: 1,
      name: 'Blood Moor',
      zoneLevel: 5,
      numberOfMonsters: 30,
      locationClearTime: 4,
      monsters: {
        fallen: {
          number: 10,
          damage: 1,
          lootProbability: 0.2
        },
        zombie: {
          number: 10,
          damage: 2,
          lootProbability: 0.5
        },
        quillRat: {
          number: 10,
          damage: 1,
          lootProbability: 0.3
        }
      }
    },
    {
      id: 2,
      name: 'Den of Evil',
      zoneLevel: 7,
      numberOfMonsters: 46,
      locationClearTime: 13,
      monsters: {
        fallen: {
          number: 15,
          damage: 1,
          lootProbability: 0.2
        },
        fallenShaman: {
          number: 4,
          damage: 4,
          lootProbability: 0.7
        },
        gargantuanBeast: {
          number: 7,
          damage: 6,
          lootProbability: 0.5
        },
        zombie: {
          number: 10,
          damage: 2,
          lootProbability: 0.5
        },
        quillRat: {
          number: 10,
          damage: 1,
          lootProbability: 0.3
        }
      }
    }
  ]
}

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      action.pushItems
      return update(state, {
        timer: { $set: action.timer },
      })
    case SET_ID_LOCATION:
      action.pushItems
      return update(state, {
        activeId: { $set: action.activeId },
      })
    default:
      return state
  }
}