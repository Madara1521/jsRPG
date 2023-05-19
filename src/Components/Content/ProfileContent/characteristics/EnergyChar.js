import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { totalEnergy } from "../../../../Redux/actions"


const EnergyChar = () => {
  const dispatch = useDispatch()

  const energyArmor = useSelector(state => state.bonusReducer.armorBonus.energy)
  const energy = useSelector(state => state.attributeReducer.energy)
  const allEnergy = energy + energyArmor
  dispatch(totalEnergy(allEnergy))
  const characteristicsEnergy = useSelector(state => state.characteristicsReducer.totalEnergy)

  return (
    <div>Strength: {characteristicsEnergy}</div>
  )
}

export default EnergyChar