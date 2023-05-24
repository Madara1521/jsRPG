import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setTottalStat } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'

const CharacteristicsComp = (props) => {
  const { 
    totalStatName, 
    name, 
    setTottalStat, 
    bonusAttribute, 
    current, 
    totalAttribute } = props

  useEffect(() => {
    setTottalStat(totalStatName, current, bonusAttribute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, bonusAttribute])

  return (
    <div>{name.charAt(0).toUpperCase() + name.slice(1)}: {totalAttribute}</div>
  )
}

CharacteristicsComp.propTypes = {
  totalStatName: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  setTottalStat: PropTypes.func.isRequired, 
  bonusAttribute: PropTypes.number.isRequired, 
  current: PropTypes.number.isRequired, 
  totalAttribute: PropTypes.number.isRequired
}

export default connect((store, ownProps) => {
  return {
    bonusAttribute: store.bonusReducer.armorBonus[ownProps.name],
    current: store.attributeReducer[ownProps.name],
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, { setTottalStat })(CharacteristicsComp)