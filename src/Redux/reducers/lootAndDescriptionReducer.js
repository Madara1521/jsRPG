import update from 'immutability-helper'
import _ from 'lodash'

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
        id: action.id
      }
    case SET_DELETE_HELMET:
      return update(state,{
        helmetGlovesBootsBelt: {$set: _.filter(state.helmetGlovesBootsBelt, (item) => item.info.id !== action.id)},
      })
    case SET_PUSH_HELMET:
      return update(state, {
        helmetGlovesBootsBelt: {$push: [action.item]},
      })
    default:
      return state
  }
}