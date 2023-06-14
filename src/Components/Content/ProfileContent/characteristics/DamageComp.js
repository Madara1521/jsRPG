import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setPhysicalDamage } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'


const DamageComp = (props) => {
  const { setPhysicalDamage,
    startPhyDamage,
    finalPhyDamage,
    startPhyBonus,
    finalPhyBonus } = props

  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPhyBonus, finalPhyBonus])

  return (
    <div>Physical damage: {startPhyDamage}-{finalPhyDamage}</div>
  )
}

DamageComp.propTypes = {
  startPhyBonus: PropTypes.number,
  finalPhyBonus: PropTypes.number,
  startPhyDamage: PropTypes.number.isRequired,
  finalPhyDamage: PropTypes.number.isRequired,
  setPhysicalDamage: PropTypes.func.isRequired
}

export default connect(store => {
  return {
    startPhyDamage: store.characteristicsReducer.startPhyDamage,
    finalPhyDamage: store.characteristicsReducer.finalPhyDamage,
    startPhyBonus: store.bonusReducer.weaponBonus.startPhyBonus,
    finalPhyBonus: store.bonusReducer.weaponBonus.finalPhyBonus
  }
}, { setPhysicalDamage })(DamageComp)