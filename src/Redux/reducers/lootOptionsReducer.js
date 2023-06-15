import helmetPeasant from './helmetImg/peasantHelmet.png'
import recruitHelmet from './helmetImg/recruitHelmet.png'
import skullCap from './helmetImg/skullCap.png'
import uniqid from 'uniqid'

//rarity 0 = 'lootCellStandart'
//rarity 1 = 'lootCellMagic'
//rarity 2 = 'lootCellKit'
//rarity 3 = 'lootCellLegendary'



const initialState = {
  helmetGlovesBootsBelt: [
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'helmet',
        lootName: 'Peasant helmet',
        img: helmetPeasant,
        requiredLevel: 1,
        defense: 4,
        strength: 2,
        dexterity: null,
        vitality: 5,
        energy: null,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'helmet',
        lootName: 'Skull cap',
        img: skullCap,
        requiredLevel: 1,
        defense: 8,
        strength: 4,
        dexterity: 6,
        vitality: 3,
        energy: 2,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'helmet',
        lootName: 'Recruit helmet',
        img: recruitHelmet,
        requiredLevel: 1,
        requiredStrength: 5,
        defense: 10,
        strength: 2,
        dexterity: null,
        vitality: 5,
        energy: null,

      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
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
        rarity: 2,
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
        rarity: 0,
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
        id: uniqid(),
        rarity: 0,
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
        id: uniqid(),
        rarity: 0,
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
        id: uniqid(),
        rarity: 0,
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
        id: uniqid(),
        rarity: 0,
        lootName: 'ring of strength',
        strength: 5,
        dexterity: 7,
        vitality: 4,
        energy: 0,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 0,
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
        id: uniqid(),
        rarity: 0,
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