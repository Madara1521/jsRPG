import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'


const DamageComp = (props) => {
  const {startPhyDamage, finalPhyDamage } = props

  return (
    <div>Physical damage: {startPhyDamage}-{finalPhyDamage}</div>
  )
}

DamageComp.propTypes = {
  startPhyDamage: PropTypes.number.isRequired,
  finalPhyDamage: PropTypes.number.isRequired,
}

export default connect(store => {
  return {
    startPhyDamage: store.characteristicsReducer.startPhyDamage,
    finalPhyDamage: store.characteristicsReducer.finalPhyDamage,
  }
}, { })(DamageComp)