import { INCREMENT_DEXTERITY, INCREMENT_STRENGTH } from "./types"

export function incrementStrength() {
  return {
    type: INCREMENT_STRENGTH,
    strength: 1
  }
}

export function incrementDexterity() {
  return {
    type: INCREMENT_DEXTERITY,
    dexterity: 1
  }
}

