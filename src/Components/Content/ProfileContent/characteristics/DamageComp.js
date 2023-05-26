import React, { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { setPhysicalDamage } from "../../../../Redux/actions"


const DamageComp = ({ setPhysicalDamage, startPhyDamage, finalPhyDamage}) => {

  const startPhyBonus = useSelector(state => state.bonusReducer.weaponBonus.startPhyBonus)
  const finalPhyBonus = useSelector(state => state.bonusReducer.weaponBonus.finalPhyBonus)

  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[startPhyBonus, finalPhyBonus])

  return (
    <div>Physical damage: {startPhyDamage}-{finalPhyDamage}</div>
  )
}

export default connect(store => {
  return {
    startPhyDamage: store.characteristicsReducer.startPhyDamage,
    finalPhyDamage: store.characteristicsReducer.finalPhyDamage
  }
}, {setPhysicalDamage})(DamageComp)