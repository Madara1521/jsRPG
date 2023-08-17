import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const ManaComp = (props) => {
  const {
    maxMana,
    currentMana } = props

  return (
    <div>Mana: {currentMana} \ {maxMana}</div>
  )
}

ManaComp.propTypes = {
  maxMana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
}

export default connect(store => {
  return {
    maxMana: store.characteristicsReducer.maxMana,
    currentMana: store.characteristicsReducer.currentMana,
  }
}, { })(ManaComp)