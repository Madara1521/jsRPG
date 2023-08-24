// import update from 'immutability-helper'

import { } from "../types"

const initialState = {
  goldBonus: 10,
  magicItemsBonus: 25,
  experienceBonus: 5,
  //side bonuses

  startPosionDamage: 6,
  finalPosionDamage: 10,
  //posion
  startColdDamage: 5,
  finalColdDamage: 8,
  //cold
  startLightningDamage: 3,
  finalLightningDamage: 7,
  //lighting
  startFireDamage: 4,
  finalFireDamage: 7,
  //fire

  fireResistance: 25,
  coldResistance: 25,
  lightiningResistance: 25,
  posionResistance: 25,
  magicResistance: 25,
  //resistance
}

export const generalInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case RESET_REGENERATION:
    //   return update(state, {
    //     [action.element]: { $set: action.maxAttribute }
    //   })
    default:
      return state
  }
}