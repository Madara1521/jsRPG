import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { totalVitality } from "../../../../Redux/actions"


const VitalityChar = () => {
  const dispatch = useDispatch()

  const vitalityArmor = useSelector(state => state.bonusReducer.armorBonus.vitality)
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const allVitality = vitality + vitalityArmor
  dispatch(totalVitality(allVitality))
  const characteristicsVitality = useSelector(state => state.characteristicsReducer.totalVitality)

  return (
    <div>Strength: {characteristicsVitality}</div>
  )
}

export default VitalityChar