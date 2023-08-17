import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const HealthAndStaminaComp = (props) => {
  const {
    maxHealth,
    currentHealth,
    maxStamina,
    currentStamina } = props

  return (
    <>
      <div>Health: {currentHealth} \ {maxHealth}</div>
      <div>Stamina: {currentStamina} \ {maxStamina} </div>
    </>
  )
}

HealthAndStaminaComp.propTypes = {
  maxHealth: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  maxStamina: PropTypes.number.isRequired,
  currentStamina: PropTypes.number.isRequired,
}

export default connect(store => {
  return {
    maxHealth: store.characteristicsReducer.maxHealth,
    currentHealth: store.characteristicsReducer.currentHealth,
    maxStamina: store.characteristicsReducer.maxStamina,
    currentStamina: store.characteristicsReducer.currentStamina,
  }
}, { })(HealthAndStaminaComp)