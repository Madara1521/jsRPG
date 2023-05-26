import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'


const AttackRaitingAndDefenseComp = (props) => {
  const { attackRating, defense, blocking } = props

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>Attack rating: {attackRating} </div>
      <div>Defense: {defense} </div>
      <div>Blocking: {blocking} </div>
    </>
  )
}

AttackRaitingAndDefenseComp.propTypes = {
  attackRating: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  blocking: PropTypes.number.isRequired,
}

export default connect(store => {
  return {
    attackRating: store.characteristicsReducer.attackRating,
    defense: store.characteristicsReducer.defense,
    blocking: store.characteristicsReducer.blocking,
  }
}, {})(AttackRaitingAndDefenseComp)