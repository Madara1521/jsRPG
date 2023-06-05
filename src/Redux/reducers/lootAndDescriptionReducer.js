import { PUSH_ITEM, SET_VIEW_ITEM } from "../types"


const initialState = {
  
  helmetGlovesBootsBelt: [],
  armor: [],
  weapon: [],
  shield: [],
  ringsAmulet: [],
  other: [],
  gold: 4514,
  selectedLoot: [ 'inventory' ]
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return {
        ...state,
        selectedLoot: action.selectedLoot
      }
    case PUSH_ITEM:
      return {
        ...state,
        [action.nameType]: [...action.items]
      }
    default:
      return state
  }
}