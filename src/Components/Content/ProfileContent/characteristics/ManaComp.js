import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { setMana } from "../../../../Redux/actions"



const ManaComp = (props) => {
  const {
    totalEnergy,
    setMana,
    maxMana,
    currentMana } = props

  useEffect(() => {
    setMana()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalEnergy])

  return (
    <div>Mana: {currentMana} \ {maxMana}</div>
  )
}

ManaComp.propTypes = {
  totalEnergy: PropTypes.number.isRequired,
  maxMana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  setMana: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    totalEnergy: store.characteristicsReducer.totalEnergy,
    maxMana: store.characteristicsReducer.maxMana,
    currentMana: store.characteristicsReducer.currentMana,
  }
}, { setMana })(ManaComp)