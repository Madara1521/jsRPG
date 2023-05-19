import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { totalStrength } from "../../../../Redux/actions"


const StrengthChar = () => {
  const dispatch = useDispatch()

  const strengthArmor = useSelector(state => state.bonusReducer.armorBonus.strength)
  const strength = useSelector(state => state.attributeReducer.strength)
  const allStrength = strength + strengthArmor
  dispatch(totalStrength(allStrength))
  const characteristicsStrength = useSelector(state => state.characteristicsReducer.totalStrength)

  return (
    <div>Strength: {characteristicsStrength}</div>
  )
}

export default StrengthChar