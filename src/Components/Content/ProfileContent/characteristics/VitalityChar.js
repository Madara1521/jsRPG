import React from "react"
import { connect, useSelector } from "react-redux"
import { totalVitality } from "../../../../Redux/actions"


const VitalityChar = ({ totalVitality }) => {
  const vitalityArmor = useSelector(state => state.bonusReducer.armorBonus.vitality)
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const allVitality = vitality + vitalityArmor
  totalVitality(allVitality)
  const characteristicsVitality = useSelector(state => state.characteristicsReducer.totalVitality)

  return (
    <div>Strength: {characteristicsVitality}</div>
  )
}

export default connect(null, { totalVitality })(VitalityChar)