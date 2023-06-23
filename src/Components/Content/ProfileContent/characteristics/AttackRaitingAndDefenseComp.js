import React, { useEffect } from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import {
  setAttackRating,
  setBlocking,
  setDefense,
} from "../../../../Redux/actions"


const AttackRaitingAndDefenseComp = (props) => {
  const {
    attackRating,
    defense,
    blocking,
    attackRatingBonus,
    setAttackRating,
    totalDexterity,
    defenseBonus,
    setDefense,
    setBlocking,
    blockingBonus } = props

  useEffect(() => {
    setAttackRating(attackRatingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attackRatingBonus, totalDexterity])

  useEffect(() => {
    setDefense(defenseBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defenseBonus, totalDexterity])

  useEffect(() => {
    setBlocking(blockingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockingBonus, totalDexterity])

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
  attackRatingBonus: PropTypes.number,
  defenseBonus: PropTypes.number,
  totalDexterity: PropTypes.number.isRequired,
  setAttackRating: PropTypes.func.isRequired,
  setDefense: PropTypes.func.isRequired,
  setBlocking: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    attackRating: store.characteristicsReducer.attackRating,
    defense: store.characteristicsReducer.defense,
    blocking: store.characteristicsReducer.blocking,
    attackRatingBonus: store.bonusReducer.allAttackRatingBonus,
    defenseBonus: store.bonusReducer.allDefenseBonus,
    blockingBonus: store.bonusReducer.shieldBonus.blockingBonus,
    totalDexterity: store.characteristicsReducer.totalDexterity,
  }
}, {
  setAttackRating,
  setDefense,
  setBlocking
})(AttackRaitingAndDefenseComp)