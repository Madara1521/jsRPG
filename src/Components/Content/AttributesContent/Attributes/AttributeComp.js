import React, { useEffect } from "react"
import { connect } from "react-redux"
import { AttributeButton } from "../../../Header/StyledGlobal"
import IconsAttribute from "./IconsAttribute"
import {
  disableButton,
  incrementStat,
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus,
  setAllBonusStat,
  setAttackRating,
  setDefense
} from '../../../../Redux/actions'
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
    marginBottom: '40px',
  },
  attribCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
    width: '100px',
    height: '30px'
  },
}))

const AttributeComp = (props) => {
  const classes = useStyles()
  const {
    totalStatName,
    statName,
    incrementStat,
    disableButton,
    setTottalStat,
    attributeCurrent,
    points,
    isButtonDisabled,
    totalAttribute,
    action,
    bonus,
    setAllDefense,
    setAllAttackRating,
    setAllPhyBonus,
    setAllBonusStat,
    attackRatingBonus,
    defenseBonus,
    totalDexterity,
    setAttackRating,
    setDefense
  } = props


  useEffect(() => {
    setAllDefense()
    setAllAttackRating()
    setAllPhyBonus()
    setAllBonusStat()
    setTottalStat(totalStatName, attributeCurrent, bonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent, bonus])

  useEffect(() => {
    action.forEach(action => action())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent, totalAttribute, bonus]) //accepts an action and performs the functions of the tracked attribute


  useEffect(() => {
    setAttackRating(attackRatingBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attackRatingBonus, totalDexterity])

  useEffect(() => {
    setDefense(defenseBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defenseBonus, totalDexterity])

  const addAttribute = () => {
    incrementStat(statName)

    if (points === 1) {
      disableButton()
    }
  }


  return (
    <div className={classes.placing}>
      <div className={classes.attribCont}>
        {statName.charAt(0).toUpperCase() + statName.slice(1)}
      </div>
      <div className={classes.attribCont}>
        {attributeCurrent}
      </div>
      <div>
        <AttributeButton onClick={() => addAttribute()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </div>
  )
}

AttributeComp.propTypes = {
  attributeCurrent: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool,
  bonusAttribute: PropTypes.number,
  totalStatName: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  setTottalStat: PropTypes.func.isRequired,
  totalAttribute: PropTypes.number.isRequired,
  bonus: PropTypes.number.isRequired,
  action: PropTypes.array,
  setAllDefense: PropTypes.func.isRequired,
  setAllAttackRating: PropTypes.func.isRequired,
  setAllPhyBonus: PropTypes.func.isRequired,
  setAllBonusStat: PropTypes.func.isRequired,
  attackRatingBonus: PropTypes.number.isRequired,
  defenseBonus: PropTypes.number.isRequired,
  totalDexterity: PropTypes.number.isRequired,
  setAttackRating: PropTypes.func.isRequired,
  setDefense: PropTypes.func.isRequired,
}

export default connect((store, ownProps) => {
  return {
    attributeCurrent: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName],
    bonus: store.bonusReducer[ownProps.allStatBonus],

    attackRatingBonus: store.bonusReducer.allAttackRatingBonus,
    defenseBonus: store.bonusReducer.allDefenseBonus,
    totalDexterity: store.characteristicsReducer.totalDexterity,
  }
}, {
  disableButton,
  incrementStat,
  setTottalStat,
  setAllDefense,
  setAllAttackRating,
  setAllPhyBonus,
  setAllBonusStat,
  setAttackRating,
  setDefense
})(AttributeComp)