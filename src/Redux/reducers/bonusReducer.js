import update from 'immutability-helper'

import {
  SET_ITEM_BONUS,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS,
  SET_ALL_BONUS_STAT,
} from "../types"
import { getSummaryParams } from '../../helpers/summaryHelper'
import uniqid from 'uniqid'



const initialState = {
  actionHappened: '',
  allDefenseBonus: 0,
  allBlockingBonus: 0,
  allAttackRatingBonus: 0,
  allStartPhyBonus: 0,
  allFinalPhyBonus: 0,
  allStrengthBonus: 0,
  allDexterityBonus: 0,
  allVitalityBonus: 0,
  allEnergyBonus: 0,

  amuletBonus: {
    info: {},
    requirements: {}
  },
  secondAmuletBonus: {
    info: {},
    requirements: {}
  },
  helmetBonus: {
    requirements: {},
    info: {}
  },
  weaponBonus: {
    info: {},
    requirements: {}
  },
  secondWeaponBonus: {
    info: {},
    requirements: {}
  },
  armorBonus: {
    info: {},
    requirements: {}
  },
  shieldBonus: {
    info: {},
    requirements: {}
  },
  ringBonus: {
    info: {},
    requirements: {}
  },
  secondRingBonus: {
    info: {},
    requirements: {}
  },
  beltBonus: {
    info: {},
    requirements: {}
  },
  glovesBonus: {
    info: {},
    requirements: {}
  },
  bootsBonus: {
    info: {},
    requirements: {}
  },
  otherBonus: {
    info: {},
    requirements: {}
  },
}

const bonuses = [
  'amuletBonus',
  'secondAmuletBonus',
  'helmetBonus',
  'weaponBonus',
  'secondWeaponBonus',
  'armorBonus',
  'shieldBonus',
  'ringBonus',
  'secondRingBonus',
  'beltBonus',
  'glovesBonus',
  'bootsBonus',
  'otherBonus'
]

export const bonusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_BONUS:
      return update(state, {
        [action.typeItem]: { $set: action.bonus },
        actionHappened: {$set: uniqid()}
      })
    case SET_ALL_DEFENSE:
      return update(state, {
        allDefenseBonus: { $set: getSummaryParams(state, bonuses, 'info.defenseBonus') },
        allBlockingBonus: { $set: getSummaryParams(state, bonuses, 'info.blockingBonus') },
      })
    case SET_ALL_ATTACK_RATING:
      return update(state, {
        allAttackRatingBonus: { $set: getSummaryParams(state, bonuses, 'info.attackRatingBonus') }
      })
    case SET_ALL_PHY_BONUS:
      return update(state, {
        allStartPhyBonus: { $set: getSummaryParams(state, bonuses, 'info.startPhysicalDamage') },
        allFinalPhyBonus: { $set: getSummaryParams(state, bonuses, 'info.finalPhysicalDamage') }
      })
    case SET_ALL_BONUS_STAT:
      return update(state, {
        allStrengthBonus: { $set: getSummaryParams(state, bonuses, 'info.strength') },
        allDexterityBonus: { $set: getSummaryParams(state, bonuses, 'info.dexterity') },
        allVitalityBonus: { $set: getSummaryParams(state, bonuses, 'info.vitality') },
        allEnergyBonus: { $set: getSummaryParams(state, bonuses, 'info.energy') }
      })
    default:
      return state
  }
}