import {
  ACTIVE_BUTTON,
  DISABLE_BUTTON,
  INCREMENT_EXPERIENCE,
  INCREMENT_POINTS,
  INCREMENT_STAT,
  SET_PHYSICAL_DAMAGE,
  RANK_UPDATE,
  SET_TOTAL_STAT,
  UPDATE_LEVEL,
  SET_ATTACK_RATING,
  SET_DEFENSE,
  SET_BLOCKING,
  SET_HEALTH_AND_STAMINA,
  SET_MANA,
  SET_VIEW_ITEM,
  SET_PUSH_ITEM,
  GET_VIEW_DESCRIPTION
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
  // when you increase to a certain level, the name of the rank changes
  return {
    type: RANK_UPDATE,
    rank
  }
}

export function setTottalStat(totalStatName, attributeCurrent, bonusAttribute) {
  // accepts the name of an attribute and sums the total value of this attribute
  return {
    type: SET_TOTAL_STAT,
    totalStatName,
    attributeCurrent,
    bonusAttribute
  }
}

export function setPhysicalDamage(startPhyBonus, finalPhyBonus) {
  // sums up the total strength and adds a bonus to the minimum and maximum physical damage
  return {
    type: SET_PHYSICAL_DAMAGE,
    startPhyBonus,
    finalPhyBonus
  }
}

export function setAttackRating(attackRatingBonus) {
  // sums up overall dexterity and adds a bonus attack rating
  return {
    type: SET_ATTACK_RATING,
    attackRatingBonus
  }
}

export function setDefense(defenseBonus) {
  // sums up overall dexterity and adds defense bonus
  return {
    type: SET_DEFENSE,
    defenseBonus
  }
}

export function setBlocking(blockingBonus) {
  // sums up overall dexterity and adds blocking bonus
  return {
    type: SET_BLOCKING,
    blockingBonus
  }
}

export function setHealthAndStamina() {
  return {
    type: SET_HEALTH_AND_STAMINA,
  }
}

export function setMana() {
  return {
    type: SET_MANA,
  }
}

export function setViewItem(selectedLoot) {
  return {
    type: SET_VIEW_ITEM,
    selectedLoot
  }
}

export function setPushItem( nameType, items) {
  return {
    type: SET_PUSH_ITEM,
    nameType,
    items
  }
}

export function getViewDescription(info,isActiveItem) {
  return {
    type: GET_VIEW_DESCRIPTION,
    info,
    isActiveItem
  }
}







