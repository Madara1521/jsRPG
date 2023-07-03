import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setAllAttackRating, setAllBonusStat, setAllDefense, setAllPhyBonus, setTottalStat } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'

const CharacteristicsComp = (props) => {
  const {
    totalStatName,
    name,
    setTottalStat,
    attributeCurrent,
    totalAttribute,
    setAllDefense,
    setAllAttackRating,
    setAllPhyBonus,
    setAllBonusStat,
    bonus,
  } = props


  useEffect(() => {
    setAllDefense()
    setAllAttackRating()
    setAllPhyBonus()
    setAllBonusStat()
    setTottalStat(totalStatName, attributeCurrent, bonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent, bonus])


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
  bonus: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    bonus: store.bonusReducer[ownProps.allStatBonus],
    attributeCurrent: store.attributeReducer[ownProps.name],
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, {
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus,
  setAllBonusStat,
})(CharacteristicsComp)


