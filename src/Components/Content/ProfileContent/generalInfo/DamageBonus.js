import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const DamageBonus = (props) => {
  const {
    name,
    startBonus,
    finalBonus
  } = props

  const renderDamage = (name, start, final) => {
    return start ? <div>{name}: {start}-{final}</div> : null
  }

  return (
    <div>
      {renderDamage(name, startBonus, finalBonus)}
    </div>
  )
}

DamageBonus.propTypes = {
  name: PropTypes.string.isRequired,
  startBonus: PropTypes.number.isRequired,
  finalBonus: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    startBonus: store.generalInformationReducer[ownProps.startDamageBonus],
    finalBonus: store.generalInformationReducer[ownProps.finalDamageBonus],
  }
}, {})(DamageBonus)
