import { INCREMENT_STRENGTH } from "./types"

export function incrementStrength() {
  return {
    type: INCREMENT_STRENGTH,
    strength: 1
  }
}