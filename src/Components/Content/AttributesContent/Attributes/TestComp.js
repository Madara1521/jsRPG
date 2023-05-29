import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { connect } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import {
  disableButton,
  incrementStat,
  setTottalStat,
} from '../../../../Redux/actions'
import { useStyles } from "../../../Styles"
import { PropTypes } from 'prop-types'


const TestComp = (props) => {
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
    bonusAttribute,
    action,
  } = props

  useEffect(() => {
    console.log(totalStatName)
    action
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[totalStatName])

  useEffect(() => {
    setTottalStat(totalStatName, attributeCurrent, bonusAttribute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent, bonusAttribute])  // counts all attributes and sends them to the store


  // useEffect(() => {
  //   setPhysicalDamage(startPhyBonus, finalPhyBonus)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [totalStrength]) // monitors strength attribute changes to change physical damage

  // useEffect(() => {
  //   setDefense(defenseBonus)
  //   setBlocking(blockingBonus)
  //   setAttackRating(attackRatingBonus)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [totalDexterity]) // tracks agility attribute changes to change defense, attack rating and blocking

  // useEffect(() => {
  //   setHealthAndStamina()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [totalVitality])

  // useEffect(() => {
  //   setMana()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [totalEnergy])

  const addAttribute = () => {
    incrementStat(statName)

    if (points === 1) {
      disableButton()
    }
  }

  return (
    <Stack direction='row'>
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
    </Stack>
  )
}

TestComp.propTypes = {
  attributeCurrent: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool,
  bonusAttribute: PropTypes.number.isRequired,
  totalStatName: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  setTottalStat: PropTypes.func.isRequired,
}

export default connect((store, ownProps) => {
  return {
    bonusAttribute: store.bonusReducer.armorBonus[ownProps.statName],
    attributeCurrent: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    totalStatName: store.characteristicsReducer[ownProps.totalStatName],
  }
}, {
  disableButton,
  incrementStat,
  setTottalStat,
})(TestComp)