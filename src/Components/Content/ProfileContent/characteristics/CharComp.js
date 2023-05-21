import React from "react"
import { useSelector } from "react-redux"




const CharComp = ({ name, action }) => {
  const armor = useSelector(state => state.bonusReducer.armorBonus[name])
  const attributeName = useSelector(state => state.attributeReducer[name])
  const total = attributeName + armor
  action(total)
 
  let char = useSelector(state => state.characteristicsReducer[`total${name.charAt(0).toUpperCase()}${name.slice(1)}`])

  return (
    <div>{name.charAt(0).toUpperCase() + name.slice(1)}: {char}</div>
  )
}

export default CharComp