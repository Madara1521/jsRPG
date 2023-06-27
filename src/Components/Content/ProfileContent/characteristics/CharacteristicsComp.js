import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setAllAttackRating, setAllDefense, setAllPhyBonus, setTottalStat } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'

const CharacteristicsComp = (props) => {
  const {
    totalStatName,
    name,
    setTottalStat,
    armorBonus,
    attributeCurrent,
    totalAttribute,
    amuletBonus,
    helmetBonus,
    secondAmuletBonus,
    weaponBonus,
    shieldBonus,
    ringBonus,
    beltBonus,
    secondRingBonus,
    glovesBonus,
    bootsBonus,
    setAllDefense,
    setAllAttackRating,
    setAllPhyBonus,
    secondWeaponBonus } = props

  useEffect(() => {
    setAllDefense()
    setAllAttackRating()
    setAllPhyBonus()
    setTottalStat(totalStatName,
      attributeCurrent,
      armorBonus,
      amuletBonus,
      helmetBonus,
      secondAmuletBonus,
      weaponBonus,
      secondWeaponBonus,
      shieldBonus,
      ringBonus,
      beltBonus,
      secondRingBonus,
      glovesBonus,
      bootsBonus,)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent,
    armorBonus,
    amuletBonus,
    helmetBonus,
    secondAmuletBonus,
    weaponBonus,
    secondWeaponBonus,
    shieldBonus,
    ringBonus,
    beltBonus,
    secondRingBonus,
    glovesBonus,
    bootsBonus,])


  return (
    <div>{name.charAt(0).toUpperCase() + name.slice(1)}: {totalAttribute}</div>
  )
}


CharacteristicsComp.propTypes = {
  totalStatName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setTottalStat: PropTypes.func.isRequired,
  attributeCurrent: PropTypes.number.isRequired,
  totalAttribute: PropTypes.number.isRequired,
  amuletBonus: PropTypes.number,
  helmetBonus: PropTypes.number,
  secondAmuletBonus: PropTypes.number,
  weaponBonus: PropTypes.number,
  secondWeaponBonus: PropTypes.number,
  armorBonus: PropTypes.number,
  shieldBonus: PropTypes.number,
  ringBonus: PropTypes.number,
  beltBonus: PropTypes.number,
  secondRingBonus: PropTypes.number,
  glovesBonus: PropTypes.number,
  bootsBonus: PropTypes.number,
}

export default connect((store, ownProps) => {
  return {
    amuletBonus: store.bonusReducer.amuletBonus.info[ownProps.name],
    helmetBonus: store.bonusReducer.helmetBonus.info[ownProps.name],
    secondAmuletBonus: store.bonusReducer.secondAmuletBonus.info[ownProps.name],
    weaponBonus: store.bonusReducer.weaponBonus.info[ownProps.name],
    secondWeaponBonus: store.bonusReducer.secondWeaponBonus.info[ownProps.name],
    armorBonus: store.bonusReducer.armorBonus.info[ownProps.name],
    shieldBonus: store.bonusReducer.shieldBonus.info[ownProps.name],
    ringBonus: store.bonusReducer.ringBonus.info[ownProps.name],
    beltBonus: store.bonusReducer.beltBonus.info[ownProps.name],
    secondRingBonus: store.bonusReducer.secondRingBonus.info[ownProps.name],
    glovesBonus: store.bonusReducer.glovesBonus.info[ownProps.name],
    bootsBonus: store.bonusReducer.bootsBonus.info[ownProps.name],
    attributeCurrent: store.attributeReducer[ownProps.name],
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, {
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus
})(CharacteristicsComp)


