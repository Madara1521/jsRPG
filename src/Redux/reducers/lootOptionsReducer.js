


const initialState = {
  helmetGlovesBootsBelt: [
    { nameLoot: 'helmet peasant', color: 'lootCellStandart' },
    { nameLoot: 'gloves dragon', color: 'lootCellLegendary' },
    { nameLoot: 'gloves dragon', color: 'lootCellLegendary' },
    { nameLoot: 'gloves dragon', color: 'lootCellLegendary' },
    { nameLoot: 'boots speed', color: 'lootCellKit' },
    { nameLoot: 'boots speed', color: 'lootCellKit' },
    { nameLoot: 'boots speed', color: 'lootCellKit' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
    { nameLoot: 'belt peasant', color: 'lootCellMagic' },
  ],
  armor: [
    { nameLoot: 'armor', color: 'lootCellStandart' },
  ],
  weapon: [
    { nameLoot: 'weapon', color: 'lootCellStandart' }
  ],
  shield: [
    { nameLoot: 'shield', color: 'lootCellStandart' }
  ],
  ringsAmulet: [
    { nameLoot: 'rings', color: 'lootCellStandart' },
    { nameLoot: 'amulet', color: 'lootCellStandart' }
  ],
  other: [
    { nameLoot: 'cube', color: 'lootCellStandart' }
  ],
}

export const lootOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_VIEW_ITEM:
    //   return {
    //     ...state,
    //     selectedLoot: action.selectedLoot
    //   }
    default:
      return state
  }
}