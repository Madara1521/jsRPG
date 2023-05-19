import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { totalDexterity } from "../../../../Redux/actions"


const DexterityChar = () => {
  const dispatch = useDispatch()

  const dexterityArmor = useSelector(state => state.bonusReducer.armorBonus.dexterity)
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const allDexterity = dexterity + dexterityArmor
  dispatch(totalDexterity(allDexterity))
  const characteristicsDexterity = useSelector(state => state.characteristicsReducer.totalDexterity)

  return (
    <div>Dexterity: {characteristicsDexterity}</div>
  )
}

export default DexterityChar