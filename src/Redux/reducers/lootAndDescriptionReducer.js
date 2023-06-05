import { SET_VIEW_ITEM } from "../types"


const initialState = {
  helmetGlovesBootsBelt: [
    { nameLoot: 'helmet' },
    { nameLoot: 'gloves' },
    { nameLoot: 'boots' },
    { nameLoot: 'belt' },
  ],
  armor: [
    { nameLoot: 'armor' },
  ],
  weapon: [
    { nameLoot: 'weapon' }
  ],
  shield: [
    { nameLoot: 'shield' }
  ],
  ringsAmulet: [
    { nameLoot: 'rings' },
    { nameLoot: 'amulet' }
  ],
  other: [
    { nameLoot: 'cube' }
  ],
  gold: 4514,
  selectedLoot: []
}

export const lootAndDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW_ITEM:
      return {
        ...state,
        selectedLoot: action.selectedLoot
      }
    default:
      return state
  }
}