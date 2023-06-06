import uniqid from 'uniqid'


const initialState = {
  helmetGlovesBootsBelt: [
    {
      color: 'lootCellStandart',
      id: uniqid(),
      info: {
        nameLoot: 'helmet peasant',
        dexterity: 5,
        vitality: 5,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellLegendary',
      info: {
        nameLoot: 'gloves dragon',
        dexterity: 60,
        vitality: 120,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellKit',
      info: {
        nameLoot: 'boots speed',
        strength: 5,
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
      id: uniqid(),
      color: 'lootCellStandart',
      info: {
        nameLoot: 'armor bandit',
        strength: 9,
        dexterity: 2,
        vitality: 6,
        energy: 0,
      }
    },
  ], // armor
  weapon: [
    {
      id: uniqid(),
      color: 'lootCellStandart',
      info: {
        nameLoot: 'javelin shtorm',
        strength: 4,
        dexterity: 3,
        vitality: 2,
        energy: 0,
        startPhysicalDamage: 33,
        finalPhycicalDamage: 46
      }
    }
  ],// weapon
  shield: [
    {
      id: uniqid(),
      color: 'lootCellStandart',
      info: {
        nameLoot: 'shield peasant',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    }
  ], //shield
  ringsAmulet: [
    {
      id: uniqid(),
      color: 'lootCellStandart',
      info: {
        nameLoot: 'ring of strength',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    },
    {
      id: uniqid(),
      color: 'lootCellStandart',
      info: {
        nameLoot: 'amulet of dexterity',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    }
  ],//rings
  other: [
    {
      id: uniqid(), color: 'lootCellStandart',
      info: {
        nameLoot: 'cube',
      }
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