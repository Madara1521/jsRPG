import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { setMana } from "../../../../Redux/actions"



const ManaComp = (props) => {
  const {
    totalEnergy,
    setMana,
    mana } = props

  useEffect(() => {
    setMana()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalEnergy])

  return (
    <div>Mana: {mana} </div>
  )
}

ManaComp.propTypes = {
  totalEnergy: PropTypes.number.isRequired,
  mana: PropTypes.number.isRequired,
  setMana: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    totalEnergy: store.characteristicsReducer.totalEnergy,
    mana: store.characteristicsReducer.mana,
  }
}, { setMana })(ManaComp)