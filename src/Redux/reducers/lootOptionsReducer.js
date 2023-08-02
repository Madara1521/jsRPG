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
import axe from './weaponImg/axes/oneHandedAxesImg/axe.png'
import crystalSword from './weaponImg/swordsImg/crystalSword.png'
import scepter from './weaponImg/scepters/scepter.png'
import poleaxe from './weaponImg/ancientWeaponImg/poleaxe.png'

import buckler from './shieldImg/buckler.png'
import boneShield from './shieldImg/boneShield.png'
import gothicShield from './shieldImg/gothicShield.png'
import kiteShield from './shieldImg/kiteShield.png'
import largeShield from './shieldImg/largeShield.png'
import smallShield from './shieldImg/smallShield.png'
import spikedShield from './shieldImg/spikedShield.png'
import towerShield from './shieldImg/towerShield.png'

import amu1 from './amuletRingsImg/amulets/amu1.png'
import amu2 from './amuletRingsImg/amulets/amu2.png'
import amu3 from './amuletRingsImg/amulets/amu3.png'

import ring1 from './amuletRingsImg/rings/ring1.png'
import ring2 from './amuletRingsImg/rings/ring2.png'
import ring3 from './amuletRingsImg/rings/ring3.png'
import ring4 from './amuletRingsImg/rings/ring4.png'
import ring5 from './amuletRingsImg/rings/ring5.png'

import uniqid from 'uniqid'
import update from 'immutability-helper'
import { SET_GENERATION_RINGS_AMULETS } from '../types'
import { generationAmulet } from '../../helpers/amuletGenerationHelper'

//rarity 0 = 'lootCellStandart'
//rarity 1 = 'lootCellMagic'
//rarity 2 = 'lootCellUnique'
//rarity 3 = 'lootCellKit'
//rarity 4 = 'lootCellLegendary'

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
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeHelmet: 'helm',
      },
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'helmet',
        lootName: 'Recruit helmet',
        img: helm,
        defenseBonus: 10,
        strength: 2,
        dexterity: null,
        vitality: 5,
        energy: null,
      }
    },
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeHelmet: 'cap',
      },
      info: {
        id: uniqid(),
        rarity: 4,
        classItem: 'helmet',
        lootName: 'Helmet Cain',
        img: cap,
        defenseBonus: 130,
        strength: 100,
        dexterity: 233,
        vitality: 500,
        energy: 111
      }
    },
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeGloves: 'chainGloves',
      },
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'gloves',
        lootName: 'Gloves peasant',
        img: chainGloves,
        defenseBonus: 4,
        strength: null,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: 23
      }
    },
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeBoots: 'lightPlateBoots',
      },
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'boots',
        lootName: 'Boots of satanic',
        img: lightPlateBoots,
        requiredLevel: 23,
        defenseBonus: 55,
        strength: 10,
        dexterity: 5,
        vitality: 60,
        energy: null,
        attackRatingBonus: 80
      }
    },
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeBelt: 'belt',
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'belt',
        lootName: 'Belt hydra',
        img: belt,
        defenseBonus: 101,
        strength: 20,
        dexterity: 25,
        vitality: 40,
        energy: null,
        attackRatingBonus: null
      }
    }
  ], // helmet,boots,gloves,belt
  armor: [
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 10,
        requiredDexterity: 15,
        typeArmor: 'ancientArmor',
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'armor',
        lootName: 'Viper armor',
        img: ancientArmor,
        defenseBonus: 553,
        strength: 100,
        dexterity: null,
        vitality: 100,
        energy: null,
        attackRatingBonus: 550
      }
    }
  ], // armor
  weapon: [
    {
      requirements: {
        requiredLevel: 22,
        requiredStrength: 123,
        requiredDexterity: 60,
        typeWeapon: 'bardiche',
      },
      info: {
        id: uniqid(),
        rarity: 0,
        classItem: 'weapon',
        lootName: 'Blackleach Blade',
        img: bardiche,
        startPhysicalDamage: 109,
        finalPhysicalDamage: 253,
        durability: 50,
        baseWeaponSpeed: 10,
        strength: null,
        dexterity: 10,
        vitality: 25,
        energy: null,
        attackRatingBonus: 20,
        oneHanded: false,
        twoHanded: true,
      }
    },
    {
      requirements: {
        requiredLevel: 11,
        requiredStrength: 55,
        requiredDexterity: 20,
        typeWeapon: 'axe',
      },
      info: {
        id: uniqid(),
        rarity: 2,
        classItem: 'weapon',
        lootName: 'Axe durability',
        img: axe,
        startPhysicalDamage: 59,
        finalPhysicalDamage: 77,
        durability: 550,
        baseWeaponSpeed: 120,
        strength: 25,
        dexterity: null,
        vitality: 45,
        energy: 11,
        attackRatingBonus: 120,
        oneHanded: true,
        twoHanded: false,
      }
    },
    {
      requirements: {
        requiredLevel: 22,
        requiredStrength: 123,
        requiredDexterity: 60,
        typeWeapon: 'crystalSword',
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'weapon',
        lootName: 'Sword of infinity',
        img: crystalSword,
        startPhysicalDamage: 59,
        finalPhysicalDamage: 83,
        durability: 100,
        baseWeaponSpeed: 150,
        strength: null,
        dexterity: 40,
        vitality: 35,
        energy: null,
        attackRatingBonus: 260,
        oneHanded: true,
        twoHanded: false,
      }
    }
  ],// weapon
  shield: [
    {
      requirements: {
        requiredLevel: null,
        requiredStrength: 10,
        requiredDexterity: null,
        typeShield: 'buckler',
      },
      info: {
        id: uniqid(),
        rarity: 1,
        classItem: 'shield',
        lootName: 'Shield peasant',
        img: buckler,
        startPhysicalDamage: null,
        finalPhysicalDamage: null,
        durability: 30,
        defenseBonus: 25,
        blockingBonus: 20,
        strength: 5,
        dexterity: null,
        vitality: null,
        energy: null,
        attackRatingBonus: null,
        oneHanded: true,
        twoHanded: false,
      }
    },
    {
      requirements: {
        requiredLevel: 32,
        requiredStrength: 150,
        requiredDexterity: 40,
        typeShield: 'buckler',
      },
      info: {
        id: uniqid(),
        rarity: 3,
        classItem: 'shield',
        lootName: 'Shield of infinity',
        img: boneShield,
        startPhysicalDamage: null,
        finalPhysicalDamage: null,
        durability: 300,
        defenseBonus: 353,
        blockingBonus: 140,
        baseWeaponSpeed: null,
        strength: 25,
        dexterity: null,
        vitality: 35,
        energy: 35,
        attackRatingBonus: 260,
        oneHanded: true,
        twoHanded: false,
      }
    }
  ], //shield
  ringsAmulet: [],//rings,amulet

  other: [
    // {
    //   info: {
    //     id: uniqid(),
    //     rarity: 0,
    //     lootName: 'cube',
    //   }
    // }
  ],// other
}

export const lootOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENERATION_RINGS_AMULETS:
      return update(state, {
        ringsAmulet: { $set: [generationAmulet(action.zoneLevel)] },
      })
    default:
      return state
  }
}