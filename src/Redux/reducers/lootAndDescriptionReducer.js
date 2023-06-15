import {
  GET_VIEW_DESCRIPTION,
  SET_PUSH_ITEM,
  SET_VIEW_ITEM,
  SET_DELETE_HELMET
} from "../types"


const initialState = {
  helmetGlovesBootsBelt: [],
  armor: [],
  weapon: [],
  shield: [],
  ringsAmulet: [],
  other: [],
  gold: 4514,
  selectedLoot: [],

  description: { color: '' },
  isActiveItem: false,
  index: ''
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
        description: action.info,
        isActiveItem: action.isActiveItem,
        index: action.index
      }
    case SET_DELETE_HELMET:
      const updatedHelmetGlovesBootsBelt = state.helmetGlovesBootsBelt.filter((item, index) => index !== action.index)
      return {
        ...state,
        helmetGlovesBootsBelt: updatedHelmetGlovesBootsBelt,
      }
    default:
      return state
  }
}