import { GET_VIEW_DESCRIPTION, SET_PUSH_ITEM, SET_VIEW_ITEM } from "../types"


const initialState = {
  helmetGlovesBootsBelt: [],
  armor: [],
  weapon: [],
  shield: [],
  ringsAmulet: [],
  other: [],
  gold: 4514,
  selectedLoot: [],

  description: {color: 'lootCellNull'}
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return {
        ...state,
        selectedLoot: action.selectedLoot
      }
    case SET_PUSH_ITEM:
      return {
        ...state,
        [action.nameType]: [...action.items]
      }
    case GET_VIEW_DESCRIPTION:
      return {
        ...state,
        description: action.info
      }
    default:
      return state
  }
}