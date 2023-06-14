import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setTottalStat } from "../../../../Redux/actions"
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
    bootsBonus, } = props

  useEffect(() => {
    setTottalStat(totalStatName,
      attributeCurrent,
      armorBonus,
      amuletBonus,
      helmetBonus,
      secondAmuletBonus,
      weaponBonus,
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
  totalAttribute: PropTypes.number.isRequired
}

export default connect((store, ownProps) => {
  return {
    amuletBonus: store.bonusReducer.amuletBonus[ownProps.name],
    helmetBonus: store.bonusReducer.helmetBonus[ownProps.name],
    secondAmuletBonus: store.bonusReducer.secondAmuletBonus[ownProps.name],
    weaponBonus: store.bonusReducer.weaponBonus[ownProps.name],
    armorBonus: store.bonusReducer.armorBonus[ownProps.name],
    shieldBonus: store.bonusReducer.shieldBonus[ownProps.name],
    ringBonus: store.bonusReducer.ringBonus[ownProps.name],
    beltBonus: store.bonusReducer.beltBonus[ownProps.name],
    secondRingBonus: store.bonusReducer.secondRingBonus[ownProps.name],
    glovesBonus: store.bonusReducer.glovesBonus[ownProps.name],
    bootsBonus: store.bonusReducer.bootsBonus[ownProps.name],
    attributeCurrent: store.attributeReducer[ownProps.name],
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, { setTottalStat })(CharacteristicsComp)


