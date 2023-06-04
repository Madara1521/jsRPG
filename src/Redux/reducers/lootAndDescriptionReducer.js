import { SET_VIEW_ITEM } from "../types"


const initialState = {
  typesLoot: {
    helmetGlovesBootsBelt: [],
    armor: [],
    weapon: [],
    shield: [],
    ringsAmulet: [],
    other: []
  },
  gold: 0,
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return {
        ...state,
        typesLoot: [action.typesLoot]
      }
    default:
      return state
  }
}