import update from 'immutability-helper'
import _ from 'lodash'

import {
  GET_VIEW_DESCRIPTION,
  PUSH_RECEIVED_ITEM,
  SET_VIEW_ITEM,
  SET_DELETE_ITEM,
  SET_PUSH_CLOTH,
  SET_ACTIVE_ITEM
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

  description: { },
  requirements: { },
  isActiveItem: false,
  activeHelmet: false,
  activeGloves: false,
  activeBoots: false,
  activeArmor: false,
  activeWeapon: false,
  activeSecondWeapon: false,
  activeShield: false,
  activeRing: false,
  activeSecondRing: false,
  activeAmulet: false,
  activeSecondAmulet: false,
  id: '',
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return update(state,{
        idArray: {$set: action.idArray}
      })
    case PUSH_RECEIVED_ITEM:
      return update(state,{
        [action.nameType]: {$push: action.items}
      })
    case GET_VIEW_DESCRIPTION:
      return update(state,{
        description: { $set: action.info },
        requirements: { $set: action.requirements },
        isActiveItem: { $set: action.isActiveItem },
        id: { $set: action.id }
      })
    case SET_DELETE_ITEM:
      return update(state,{
        [action.typeArray]: {$set: _.filter(state[action.typeArray], (item) => item.info.id !== action.id)},
      })
    case SET_ACTIVE_ITEM:
      return update(state,{
        [action.typeItem]: {$set: action.bool}
      })
    case SET_PUSH_CLOTH:
      return update(state, {
        [action.typeArray]: {$push: [action.item]},
      })
    default:
      return state
  }
}