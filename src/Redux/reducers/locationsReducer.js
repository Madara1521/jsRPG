import update from 'immutability-helper'
import { SET_TIMER } from '../types'

const initialState = {
  timer: -1,
  locations: [
    {
      id: 1,
      name: 'Blood Moor',
      zoneLevel: 1,
      numberOfMonsters: 30,
      locationClearTime: 4000,
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
      zoneLevel: 1,
      numberOfMonsters: 46,
      locationClearTime: 5000,
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
    default:
      return state
  }
}