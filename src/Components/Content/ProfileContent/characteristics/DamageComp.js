import React, { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { physicalDamage } from "../../../../Redux/actions"





const DamageComp = ({ physicalDamage }) => {

  const startPhyBonus = useSelector(state => state.bonusReducer.weaponBonus.startPhyBonus)
  const finalPhyBonus = useSelector(state => state.bonusReducer.weaponBonus.finalPhyBonus)
  
  useEffect(() => {
    physicalDamage( startPhyBonus, finalPhyBonus)
  },[startPhyBonus,finalPhyBonus,physicalDamage])

  const startPhyDamage = useSelector(state => state.characteristicsReducer.startPhyDamage)
  const finalPhyDamage = useSelector(state => state.characteristicsReducer.finalPhyDamage)
  console.log(startPhyDamage, finalPhyDamage)

  return (
    <div>Physical damage: {startPhyDamage}-{finalPhyDamage}</div>
  )
}

export default connect(null, {physicalDamage})(DamageComp)