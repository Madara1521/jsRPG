import {
  ACTIVE_BUTTON,
  ARMOR_BONUS,
  DISABLE_BUTTON,
  INCREMENT_EXPERIENCE,
  INCREMENT_POINTS,
  INCREMENT_STAT,
  PHYSICAL_DAMAGE,
  RANK_UPDATE10,
  RANK_UPDATE100,
  RANK_UPDATE20,
  RANK_UPDATE40,
  RANK_UPDATE60,
  RANK_UPDATE80,
  RANK_UPDATE90,
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

export function rankUpdate10() {
  return {
    type: RANK_UPDATE10,
  }
}

export function rankUpdate20() {
  return {
    type: RANK_UPDATE20,
  }
}

export function rankUpdate40() {
  return {
    type: RANK_UPDATE40,
  }
}
export function rankUpdate60() {
  return {
    type: RANK_UPDATE60,
  }
}
export function rankUpdate80() {
  return {
    type: RANK_UPDATE80,
  }
}
export function rankUpdate90() {
  return {
    type: RANK_UPDATE90,
  }
}

export function rankUpdate100() {
  return {
    type: RANK_UPDATE100,
  }
}

export function setTottalStat(totalStatName, current, bonusAttribute) {
  return {
    type: SET_TOTAL_STAT,
    totalStatName,
    current,
    bonusAttribute
  }
}

export function armorBonus() {
  return {
    type: ARMOR_BONUS,
  }
}

export function physicalDamage(startPhyBonus, finalPhyBonus) {
  return {
    type: PHYSICAL_DAMAGE,
    startPhyBonus,
    finalPhyBonus
  }
}







