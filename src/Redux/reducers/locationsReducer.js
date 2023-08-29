import update from 'immutability-helper'
import { SET_ID_LOCATION, SET_TIMER, VIEW_ACT } from '../types'


const initialState = {
  timer: -1,
  activeLocationId: 1,
  activeActId: 1,
  firstActNormal: [
    {
      id: 1,
      name: 'Blood Moor',
      zoneLevel: 1,
      numberOfMonsters: 30,
      locationClearTime: 4,
      monsters: [
        {
          name: 'Fallen',
          number: 10,
          experience: 10,
          damage: 1,
          lootProbability: 0.2
        },
        {
          name: 'Zombie',
          number: 10,
          experience: 15,
          damage: 2,
          lootProbability: 0.5
        },
        {
          name: 'Quill Rat',
          number: 10,
          experience: 10,
          damage: 1,
          lootProbability: 0.3
        }
      ]
    },
    {
      id: 2,
      name: 'Den of Evil',
      zoneLevel: 1,
      numberOfMonsters: 46,
      locationClearTime: 13,
      monsters: [
        {
          name: 'Fallen',
          number: 15,
          experience: 10,
          damage: 1,
          lootProbability: 0.2
        },
        {
          name: 'Fallen Shaman',
          number: 4,
          experience: 17,
          damage: 4,
          lootProbability: 0.7
        },
        {
          name: 'Gargantuan Beast',
          number: 7,
          experience: 18,
          damage: 6,
          lootProbability: 0.5
        },
        {
          name: 'Zombie',
          number: 10,
          experience: 13,
          damage: 2,
          lootProbability: 0.5
        },
        {
          name: 'Quill Rat',
          number: 10,
          experience: 10,
          damage: 1,
          lootProbability: 0.3
        }
      ]
    }
  ],
  secondActNormal: [],
  thirdActNormal: [],
  fourthActNormal: [],
  fifthActNormal: []
}

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMER:
      return update(state, {
        timer: { $set: action.timer },
      })
    case SET_ID_LOCATION:
      return update(state, {
        activeLocationId: { $set: action.activeLocationId },
      })
    case VIEW_ACT:
      return update(state, {
        activeActId: { $set: action.idAct }
      })
    default:
      return state
  }
}