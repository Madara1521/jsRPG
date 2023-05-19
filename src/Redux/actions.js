import { ACTIVE_BUTTON, ARMOR_BONUS, DISABLE_BUTTON, INCREMENT_DEXTERITY, INCREMENT_ENERGY, INCREMENT_EXPERIENCE, INCREMENT_POINTS, INCREMENT_STRENGTH, INCREMENT_VITALITY, RANK_UPDATE10, RANK_UPDATE100, RANK_UPDATE20, RANK_UPDATE40, RANK_UPDATE60, RANK_UPDATE80, RANK_UPDATE90, TOTAL_DEXTERITY, TOTAL_ENERGY, TOTAL_STRENGTH, TOTAL_VITALITY, UPDATE_LEVEL } from "./types"

export function incrementStrength() {
  return {
    type: INCREMENT_STRENGTH
  }
}

export function incrementDexterity() {
  return {
    type: INCREMENT_DEXTERITY
  }
}

export function incrementVitality() {
  return {
    type: INCREMENT_VITALITY
  }
}

export function incrementEnergy() {
  return {
    type: INCREMENT_ENERGY
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

export function totalStrength(strength) {
  return {
    type: TOTAL_STRENGTH,
    strength
  }
}
export function totalDexterity(dexterity) {
  return {
    type: TOTAL_DEXTERITY,
    dexterity
  }
}

export function totalVitality(vitality) {
  return {
    type: TOTAL_VITALITY,
    vitality
  }
}

export function totalEnergy(energy) {
  return {
    type: TOTAL_ENERGY,
    energy
  }
}

export function armorBonus() {
  return {
    type: ARMOR_BONUS,
  }
}


