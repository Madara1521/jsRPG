import React from "react"
import { connect, useSelector } from "react-redux"
import { totalStrength } from "../../../../Redux/actions"


const StrengthChar = ({ totalStrength }) => {
  const strengthArmor = useSelector(state => state.bonusReducer.armorBonus.strength)
  const strength = useSelector(state => state.attributeReducer.strength)
  const allStrength = strength + strengthArmor
  totalStrength(allStrength)
  const characteristicsStrength = useSelector(state => state.characteristicsReducer.totalStrength)

  return (
    <div>Strength: {characteristicsStrength}</div>
  )
}

export default connect(null, { totalStrength })(StrengthChar)