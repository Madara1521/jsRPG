import cap from './helmetImg/peasantHelmet.png'
import skullCap from './helmetImg/skullCap.png'
import helm from './helmetImg/recruitHelmet.png'

import leatherGloves from './glovesImg/leatherGloves.png'
import heavyGloves from './glovesImg/heavyGloves.png'
import chainGloves from './glovesImg/chainGloves.png'
import gaunlets from './glovesImg/gaunlets.png'
import lightGauntlets from './glovesImg/lightGauntlets.png'

import chainBoots from './bootsImg/chainBoots.png'
import greaves from './bootsImg/greaves.png'
import heavyBoots from './bootsImg/heavyBoots.png'
import boots from './bootsImg/leatherBoots.png'
import lightPlateBoots from './bootsImg/lightPlateBoots.png'

import sash from './beltImg/sash.png'
import lightBelt from './beltImg/lightBelt.png'
import belt from './beltImg/belt.png'
import heavyBelt from './beltImg/heavyBelt.png'
import platedBelt from './beltImg/platedBelt.png'

import uniqid from 'uniqid'

//rarity 0 = 'lootCellStandart'
//rarity 1 = 'lootCellMagic'
//rarity 2 = 'lootCellKit'
//rarity 3 = 'lootCellLegendary'

//img class
//Belts:
// 1- sash
// 2- light belt
// 3- belt
// 4- heavy belt
// 5- plated belt
//
//Helms:
// 1- cap
// 2- skullCap
// 3- helm
// 4- fullHelm
// 5- greatHelm
// 6- mask
// 7- crown
// 8- boneHelm
//
//Boots:
// 1- boots
// 2- heavyBoots
// 3- chainBoots
// 4- lightPlateBoots
// 5- greaves
//
//Gloves:
// 1- leatherGloves
// 2- heavyGloves
// 3- chainGloves
// 4- lightGauntlets
// 5- gauntlets

const initialState = {
  helmetGlovesBootsBelt: [
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'helmet',
        lootName: 'Peasant helmet',
        img: cap,
        requiredLevel: 1,
        defenseBonus: 4,
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
        defenseBonus: 8,
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
        img: helm,
        requiredLevel: 1,
        requiredStrength: 5,
        defenseBonus: 10,
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
        classItem: 'gloves',
        lootName: 'Gloves Dragon',
        img: leatherGloves,
        requiredLevel: 41,
        requiredStrength: 35,
        defenseBonus: 14,
        strength: 32,
        dexterity: 23,
        vitality: 20,
        energy: 15,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 2,
        classItem: 'gloves',
        lootName: 'Gloves Diablo',
        img: gaunlets,
        requiredLevel: 71,
        requiredStrength: 35,
        defenseBonus: 95,
        strength: 42,
        dexterity: 43,
        vitality: 40,
        energy: 55,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'gloves',
        lootName: 'Gloves sakura',
        img: lightGauntlets,
        requiredLevel: 11,
        defenseBonus: 14,
        strength: null,
        dexterity: 3,
        vitality: 2,
        energy: 5,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'gloves',
        lootName: 'Gloves Dracula',
        img: heavyGloves,
        requiredLevel: 35,
        requiredStrength: 25,
        defenseBonus: 14,
        strength: 32,
        dexterity: 23,
        vitality: 20,
        energy: 15,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'gloves',
        lootName: 'Gloves peasant',
        img: chainGloves,
        requiredLevel: 1,
        requiredStrength: null,
        defenseBonus: 4,
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'boots',
        lootName: 'Boots of speed',
        img: heavyBoots,
        requiredLevel: 33,
        requiredStrength: 5,
        requiredDexterity: 15,
        defenseBonus: 35,
        strength: 20,
        dexterity: 25,
        vitality: 40,
        energy: 35,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'boots',
        lootName: 'Greaves sex',
        img: greaves,
        requiredLevel: 3,
        defenseBonus: 5,
        strength: 6,
        dexterity: 3,
        vitality: 4,
        energy: 5,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'boots',
        lootName: 'Boots of damage',
        img: boots,
        requiredLevel: 33,
        requiredStrength: 5,
        requiredDexterity: 15,
        defenseBonus: 35,
        strength: 20,
        dexterity: 25,
        vitality: 40,
        energy: 35,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'boots',
        lootName: 'Boots of satanic',
        img: lightPlateBoots,
        requiredLevel: 23,
        requiredStrength: 23,
        requiredDexterity: 45,
        defenseBonus: 55,
        strength: 10,
        dexterity: 5,
        vitality: 60,
        energy: 25,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'boots',
        lootName: 'Boots of gay',
        img: chainBoots,
        requiredLevel: 33,
        requiredStrength: 5,
        requiredDexterity: 15,
        defenseBonus: 35,
        strength: 20,
        dexterity: 25,
        vitality: 40,
        energy: 35,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 2,
        classItem: 'belt',
        lootName: 'Belt hydra',
        img: belt,
        requiredLevel: 45,
        requiredDexterity: 25,
        defenseBonus: 101,
        strength: 20,
        dexterity: 25,
        vitality: 40,
        energy: 35,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'belt',
        lootName: 'Belt cain',
        img: platedBelt,
        requiredLevel: 65,
        requiredDexterity: 25,
        defenseBonus: 201,
        strength: 40,
        dexterity: 55,
        vitality: 60,
        energy: 35,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'belt',
        lootName: 'Belt barbarian',
        img: lightBelt,
        requiredLevel: 15,
        requiredDexterity: 15,
        defenseBonus: 53,
        strength: 10,
        dexterity: 15,
        vitality: 30,
        energy: 45,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'belt',
        lootName: 'Belt spider',
        img: sash,
        requiredLevel: 41,
        requiredDexterity: 25,
        defenseBonus: 105,
        strength: 10,
        dexterity: 35,
        vitality: 30,
        energy: 65,
      }
    },
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'belt',
        lootName: 'Belt nigers',
        img: heavyBelt,
        requiredLevel: 1,
        defenseBonus: 1,
        strength: 1000,
        dexterity: null,
        vitality: 1000,
        energy: 1000,
      }
    },
  ], // helmet,boots,gloves,belt
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