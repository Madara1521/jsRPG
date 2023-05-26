import {
  ACTIVE_BUTTON,
  SET_ARMOR_BONUS,
  DISABLE_BUTTON,
  INCREMENT_EXPERIENCE,
  INCREMENT_POINTS,
  INCREMENT_STAT,
  SET_PHYSICAL_DAMAGE,
  RANK_UPDATE,
  SET_TOTAL_STAT,
  UPDATE_LEVEL
} from "./types"

export function incrementStat(statName) {
  //accepts the following props
  return {
    type: INCREMENT_STAT,
    statName
  }
}

export function disableButton() {
  return {
    type: DISABLE_BUTTON
  }
}

export function incrementPoints() {
  return {
    type: INCREMENT_POINTS
  }
}

export function activeButton() {
  return {
    type: ACTIVE_BUTTON
  }
}

export function updateLevel(experience) {
  return {
    type: UPDATE_LEVEL,
    experience
  }
}

export function incrementExperience() {
  return {
    type: INCREMENT_EXPERIENCE,
  }
}

export function rankUpdate(rank) {
  return {
    type: RANK_UPDATE,
    rank
  }
}

export function setTottalStat(totalStatName, attributeCurrent, bonusAttribute) {
  return {
    type: SET_TOTAL_STAT,
    totalStatName,
    attributeCurrent,
    bonusAttribute
  }
}

export function setArmorBonus() {
  return {
    type: SET_ARMOR_BONUS,
  }
}

export function setPhysicalDamage(startPhyBonus, finalPhyBonus) {
  return {
    type: SET_PHYSICAL_DAMAGE,
    startPhyBonus,
    finalPhyBonus
  }
}







