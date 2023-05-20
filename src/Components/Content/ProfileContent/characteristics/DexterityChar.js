import React from "react"
import { connect, useSelector } from "react-redux"
import { totalDexterity } from "../../../../Redux/actions"


const DexterityChar = ({ totalDexterity }) => {
  const dexterityArmor = useSelector(state => state.bonusReducer.armorBonus.dexterity)
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const allDexterity = dexterity + dexterityArmor
  totalDexterity(allDexterity)
  const characteristicsDexterity = useSelector(state => state.characteristicsReducer.totalDexterity)

  return (
    <div>Dexterity: {characteristicsDexterity}</div>
  )
}

export default connect(null, { totalDexterity })(DexterityChar)