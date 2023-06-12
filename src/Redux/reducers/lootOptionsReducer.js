import helmetPeasant from './helmetImg/peasantHelmet.png'
import recruitHelmet from './helmetImg/recruitHelmet.png'
import skullCap from './helmetImg/skullCap.png'
import uniqid from 'uniqid'

const initialState = {
  helmetGlovesBootsBelt: [
    {
      info: {
        id: uniqid(),
        rarity: 0,
        color: 'lootCellStandart',
        lootName: 'Peasant helmet',
        img: helmetPeasant,
        requiredLevel: 1,
        defense: 4
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 0,
        color: 'lootCellStandart',
        lootName: 'Skull cap',
        img: skullCap,
        requiredLevel: 1,
        defense: 8
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        lootName: 'Recruit helmet',
        img: recruitHelmet,
        requiredLevel: 1,
        requiredStrength: 5,
        defense: 10,
        dexterity: 7,
        vitality: 3

      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        color: 'lootCellLegendary',
        lootName: 'gloves dragon',
        requiredLevel: 40,
        requiredStrength: 50,
        requiredDexterity: 35,
        dexterity: 60,
        vitality: 120,
      }
    },
    {
      info: {
        id: uniqid(),
        color: 'lootCellKit',
        lootName: 'boots speed',
        requiredLevel: 43,
        requiredStrength: 35,
        requiredDexterity: 55,
        strength: 5,
        dexterity: 90,
        vitality: 20,
        energy: 80,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 2,
        color: 'lootCellMagic',
        lootName: 'belt peasant',
        requiredLevel: 1,
        strength: 4,
        dexterity: 3,
        vitality: 2,
        energy: 0,
      }
    },

  ], // helmet
  armor: [
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'armor bandit',
        strength: 9,
        dexterity: 2,
        vitality: 6,
        energy: 0,
      }
    },
  ], // armor
  weapon: [
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'Blackleach Blade',
        startPhysicalDamage: 109,
        finalPhycicalDamage: 253,
        requiredLevel: 10,
        requiredStrength: 10,
        requiredDexterity: 15,
        durability: 50,
        baseWeaponSpeed: 10,
        strength: 4,
        dexterity: 10,
        vitality: 25,
      }
    }
  ],// weapon
  shield: [
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'shield peasant',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    }
  ], //shield
  ringsAmulet: [
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'ring of strength',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    },
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'amulet of dexterity',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    }
  ],//rings
  other: [
    {
      info: {
        color: 'lootCellStandart',
        lootName: 'cube',
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