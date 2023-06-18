import {
  GET_VIEW_DESCRIPTION,
  SET_PUSH_ITEM,
  SET_VIEW_ITEM,
  SET_DELETE_HELMET,
  SET_PUSH_HELMET,
} from "../types"


const initialState = {
  helmetGlovesBootsBelt: [],
  armor: [],
  weapon: [],
  shield: [],
  ringsAmulet: [],
  other: [],
  selectedLoot: [],
  gold: 4514,
  idArray: '',

  description: { color: '' },
  isActiveItem: false,
  id: '',
  index: ''
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return {
        ...state,
        idArray: action.idArray
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
    case SET_PUSH_HELMET:
      return {
        ...state,
        helmetGlovesBootsBelt: [...state.helmetGlovesBootsBelt, action.item],
      }
    default:
      return state
  }
}