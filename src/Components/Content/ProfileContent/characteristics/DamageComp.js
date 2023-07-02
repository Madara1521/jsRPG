import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setPhysicalDamage } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'


const DamageComp = (props) => {
  const { setPhysicalDamage,
    startPhyDamage,
    finalPhyDamage,
    startPhyBonus,
    finalPhyBonus,
    totalStrength } = props

  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPhyBonus, finalPhyBonus, totalStrength])

  return (
    <div>Physical damage: {startPhyDamage}-{finalPhyDamage}</div>
  )
}

DamageComp.propTypes = {
  startPhyBonus: PropTypes.number,
  finalPhyBonus: PropTypes.number,
  startPhyDamage: PropTypes.number.isRequired,
  finalPhyDamage: PropTypes.number.isRequired,
  totalStrength: PropTypes.number.isRequired,
  setPhysicalDamage: PropTypes.func.isRequired
}

export default connect(store => {
  return {
    startPhyDamage: store.characteristicsReducer.startPhyDamage,
    finalPhyDamage: store.characteristicsReducer.finalPhyDamage,
    totalStrength: store.characteristicsReducer.totalStrength,
    startPhyBonus: store.bonusReducer.allStartPhyBonus,
    finalPhyBonus: store.bonusReducer.allFinalPhyBonus
  }
}, { setPhysicalDamage })(DamageComp)