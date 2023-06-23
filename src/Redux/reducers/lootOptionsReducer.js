/* eslint-disable no-unused-vars */
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

import ancientArmor from './armorImg/ancientArmor.png'
import breastPlate from './armorImg/breastPlate.png'
import chainMail from './armorImg/chainMail.png'
import fieldPlate from './armorImg/fieldPlate.png'
import fullPlateMail from './armorImg/fullPlateMail.png'

import bardiche from './weaponImg/ancientWeaponImg/bardiche.png'

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
        attackRatingBonus: 30
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
        attackRatingBonus: 30
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
        energy: null,
        attackRatingBonus: 30
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
        energy: null,
        attackRatingBonus: 30
      }
    }
  ], // helmet,boots,gloves,belt
  armor: [
    {
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'armor',
        lootName: 'Viper armor',
        img: ancientArmor,
        requiredLevel: 40,
        defenseBonus: 553,
        strength: 100,
        dexterity: null,
        vitality: 100,
        energy: null, attackRatingBonus: 30
      }
    }
  ], // armor
  weapon: [
    {
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'weapon',
        typeWeapon: 'ancientWeapon',
        lootName: 'Blackleach Blade',
        img: bardiche,
        startPhysicalDamage: 109,
        finalPhysicalDamage: 253,
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        durability: 50,
        baseWeaponSpeed: 10,
        strength: null,
        dexterity: 10,
        vitality: 25,
        energy: null, 
        attackRatingBonus: 30,
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
        energy: null, 
        attackRatingBonus: 30
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
        energy: null, 
        attackRatingBonus: 30
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
        energy: null, 
        attackRatingBonus: 30
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