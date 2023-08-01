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
  GET_VIEW_DESCRIPTION,
  SET_ITEM_BONUS,
  SET_DELETE_ITEM,
  SET_PUSH_CLOTH,
  SET_ACTIVE_ITEM,
  SET_ALL_DEFENSE,
  SET_ALL_ATTACK_RATING,
  SET_ALL_PHY_BONUS,
  SET_ALL_BONUS_STAT,
  SET_TIMER,
  SET_ID_LOCATION,
  SET_GENERATION_RINGS_AMULETS
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

export function setTottalStat(
  totalStatName, 
  attributeCurrent,
  bonus) {
  // accepts the name of an attribute and sums the total value of this attribute
  return {
    type: SET_TOTAL_STAT,
    totalStatName,
    attributeCurrent,
    bonus
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

export function setViewItem(idArray) {
  return {
    type: SET_VIEW_ITEM,
    idArray
  }
}

export function setPushItem(nameType, items) {
  return {
    type: SET_PUSH_ITEM,
    nameType,
    items
  }
}

export function getViewDescription(info,requirements,isActiveItem,id) {
  return {
    type: GET_VIEW_DESCRIPTION,
    info,
    requirements,
    isActiveItem,
    id
  }
}

export function setItemBonus(typeItem,bonus,) {
  return {
    type: SET_ITEM_BONUS,
    typeItem,
    bonus,
  }
}

export function setDeleteItem(typeArray,id) {
  return {
    type: SET_DELETE_ITEM,
    typeArray,
    id
  }
}

export function setPushCloth(typeArray,item) {
  return {
    type: SET_PUSH_CLOTH,
    typeArray,
    item
  }
}

export function setActiveItem(typeItem,bool) {
  return {
    type: SET_ACTIVE_ITEM,
    typeItem,
    bool
  }
}

export function setAllDefense() {
  return {
    type: SET_ALL_DEFENSE,
  }
}

export function setAllAttackRating() {
  return {
    type: SET_ALL_ATTACK_RATING,
  }
}

export function setAllPhyBonus() {
  return {
    type: SET_ALL_PHY_BONUS,
  }
}

export function setAllBonusStat() {
  return {
    type: SET_ALL_BONUS_STAT,
  }
}

export function setTimer(timer, pushItems) {
  return {
    type: SET_TIMER,
    timer,
    pushItems
  }
}

export function setIdLocation(activeId) {
  return {
    type: SET_ID_LOCATION,
    activeId
  }
}
export function setGenerationRingsAmulets() {
  return {
    type: SET_GENERATION_RINGS_AMULETS,
  }
}









