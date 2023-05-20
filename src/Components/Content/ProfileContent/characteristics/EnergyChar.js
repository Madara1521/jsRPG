import React from "react"
import { connect, useSelector } from "react-redux"
import { totalEnergy } from "../../../../Redux/actions"


const EnergyChar = ({ totalEnergy }) => {
  const energyArmor = useSelector(state => state.bonusReducer.armorBonus.energy)
  const energy = useSelector(state => state.attributeReducer.energy)
  const allEnergy = energy + energyArmor
  totalEnergy(allEnergy)
  const characteristicsEnergy = useSelector(state => state.characteristicsReducer.totalEnergy)

  return (
    <div>Strength: {characteristicsEnergy}</div>
  )
}

export default connect(null, { totalEnergy })(EnergyChar)