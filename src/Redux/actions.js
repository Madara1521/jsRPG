import { ACTIVE_BUTTON, DISABLE_BUTTON, INCREMENT_DEXTERITY, INCREMENT_ENERGY, INCREMENT_EXPERIENCE, INCREMENT_POINTS, INCREMENT_STRENGTH, INCREMENT_VITALITY, RANK_UPDATE10, RANK_UPDATE20, UPDATE_LEVEL } from "./types"

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

