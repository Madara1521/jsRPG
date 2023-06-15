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
    armorBonus,
    amuletBonus,
    helmetBonus,
    secondAmuletBonus,
    weaponBonus,
    shieldBonus,
    ringBonus,
    beltBonus,
    secondRingBonus,
    glovesBonus,
    bootsBonus, } = props

  useEffect(() => {
    setTottalStat(totalStatName,
      attributeCurrent,
      armorBonus,
      amuletBonus,
      helmetBonus,
      secondAmuletBonus,
      weaponBonus,
      shieldBonus,
      ringBonus,
      beltBonus,
      secondRingBonus,
      glovesBonus,
      bootsBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent])

  useEffect(() => {
    action.forEach(action => action())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalAttribute]) //accepts an action and performs the functions of the tracked attribute

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

  amuletBonus: PropTypes.number,
  helmetBonus: PropTypes.number,
  secondAmuletBonus: PropTypes.number,
  weaponBonus: PropTypes.number,
  armorBonus: PropTypes.number,
  shieldBonus: PropTypes.number,
  ringBonus: PropTypes.number,
  beltBonus: PropTypes.number,
  secondRingBonus: PropTypes.number,
  glovesBonus: PropTypes.number,
  bootsBonus: PropTypes.number,
}

export default connect((store, ownProps) => {
  return {
    attributeCurrent: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName],

    amuletBonus: store.bonusReducer.amuletBonus[ownProps.statName],
    helmetBonus: store.bonusReducer.helmetBonus[ownProps.statName],
    secondAmuletBonus: store.bonusReducer.secondAmuletBonus[ownProps.statName],
    weaponBonus: store.bonusReducer.weaponBonus[ownProps.statName],
    armorBonus: store.bonusReducer.armorBonus[ownProps.statName],
    shieldBonus: store.bonusReducer.shieldBonus[ownProps.statName],
    ringBonus: store.bonusReducer.ringBonus[ownProps.statName],
    beltBonus: store.bonusReducer.beltBonus[ownProps.statName],
    secondRingBonus: store.bonusReducer.secondRingBonus[ownProps.statName],
    glovesBonus: store.bonusReducer.glovesBonus[ownProps.statName],
    bootsBonus: store.bonusReducer.bootsBonus[ownProps.statName]
  }
}, {
  disableButton,
  incrementStat,
  setTottalStat
})(AttributeComp)