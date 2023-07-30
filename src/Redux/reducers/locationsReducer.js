// import update from 'immutability-helper'

const initialState = {
  locations: [
    {
      name: 'Blood Moor',
      zoneLevel : 1,
      numberOfMonsters: 30,
      locationClearTime: 4000,
      monsters: {
        fallen: {
          number: 10,
          damage: 1,
          lootProbability: 0.2
        },
        zombie: {
          number:10,
          damage: 2,
          lootProbability: 0.5
        },
        quillRat: {
          number:10,
          damage: 1,
          lootProbability: 0.3
        }
      }
    },
    {
      name: 'Den of Evil',
      zoneLevel : 1,
      numberOfMonsters: 46,
      locationClearTime: 5000,
      monsters: {
        fallen: {
          number: 15,
          damage: 1,
          lootProbability: 0.2
        },
        fallenShaman:{
          number: 4,
          damage: 4,
          lootProbability: 0.7
        },
        gargantuanBeast:{
          number: 7,
          damage: 6,
          lootProbability: 0.5
        },
        zombie: {
          number:10,
          damage: 2,
          lootProbability: 0.5
        },
        quillRat: {
          number:10,
          damage: 1,
          lootProbability: 0.3
        }
      }
    }
  ]
}

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_LEVEL:
    //   return update(state, {
    //     level: { $set: state.level + 1 },
    //     nextLevel: { $set: state.nextLevel + action.experience }
    //   })
    default:
      return state
  }
}