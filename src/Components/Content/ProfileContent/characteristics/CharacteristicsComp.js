import React from "react"
import { connect, useSelector } from "react-redux"
import { setTottalStat } from "../../../../Redux/actions"

const CharacteristicsComp = ({ totalStatName, name, setTottalStat }) => {
  const bonusAttribute = useSelector(state => state.bonusReducer.armorBonus[name])
  const current = useSelector(state => state.attributeReducer[name])

  setTottalStat(totalStatName,current,bonusAttribute)

  const totalAttribute = useSelector(state => state.characteristicsReducer[totalStatName])

  return (
    <div>{name.charAt(0).toUpperCase() + name.slice(1)}: {totalAttribute}</div>
  )
}

export default connect(null, {setTottalStat})(CharacteristicsComp)