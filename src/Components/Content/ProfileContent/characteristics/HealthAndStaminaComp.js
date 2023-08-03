import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { setHealthAndStamina } from "../../../../Redux/actions"



const HealthAndStaminaComp = (props) => {
  const {
    totalVitality,
    maxHealth,
    currentHealth,
    stamina,
    setHealthAndStamina } = props

  useEffect(() => {
    setHealthAndStamina()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalVitality])

  return (
    <>
      <div>Health: {currentHealth} \ {maxHealth}</div>
      <div>Stamina: {stamina} </div>
    </>
  )
}

HealthAndStaminaComp.propTypes = {
  totalVitality: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  stamina: PropTypes.number.isRequired,
  setHealthAndStamina: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    totalVitality: store.characteristicsReducer.totalVitality,
    maxHealth: store.characteristicsReducer.maxHealth,
    currentHealth: store.characteristicsReducer.currentHealth,
    stamina: store.characteristicsReducer.stamina,
  }
}, { setHealthAndStamina })(HealthAndStaminaComp)