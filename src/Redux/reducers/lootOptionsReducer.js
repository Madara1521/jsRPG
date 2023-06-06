import uniqid from 'uniqid'


const initialState = {
  helmetGlovesBootsBelt: [
    {
      color: 'lootCellStandart',
      id: uniqid(),
      info: {
        nameLoot: 'helmet peasant',
        strength: 5,
        dexterity: 5,
        vitality: 5,
        energy: 5,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellLegendary',
      info: {
        nameLoot: 'gloves dragon',
        strength: 80,
        dexterity: 60,
        vitality: 120,
        energy: 55,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellKit',
      info: {
        nameLoot: 'boots speed',
        strength: 30,
        dexterity: 90,
        vitality: 20,
        energy: 80,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellMagic',
      info: {
        nameLoot: 'belt peasant',
        strength: 4,
        dexterity: 3,
        vitality: 2,
        energy: 0,
      }
    },

  ], // helmet
  armor: [
    {
      nameLoot: 'armor',
      id: uniqid(),
      color: 'lootCellStandart'
    },
  ], // armor
  weapon: [
    {
      nameLoot: 'weapon',
      id: uniqid(),
      color: 'lootCellStandart'
    }
  ],// weapon
  shield: [
    {
      nameLoot: 'shield',
      id: uniqid(),
      color: 'lootCellStandart'
    }
  ], //shield
  ringsAmulet: [
    {
      nameLoot: 'rings',
      id: uniqid(),
      color: 'lootCellStandart'
    },
    {
      nameLoot: 'amulet',
      id: uniqid(),
      color: 'lootCellStandart'
    }
  ],//rings
  other: [
    {
      nameLoot: 'cube',
      id: uniqid(), color: 'lootCellStandart'
    }
  ],// other
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