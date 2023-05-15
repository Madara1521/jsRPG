import { DISABLE_BUTTON, INCREMENT_DEXTERITY, INCREMENT_ENERGY, INCREMENT_STRENGTH, INCREMENT_VITALITY } from "./types"

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

