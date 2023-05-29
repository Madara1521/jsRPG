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
    bonusAttribute,
    totalAttribute,
    action } = props

  useEffect(() => {
    setTottalStat(totalStatName, attributeCurrent, bonusAttribute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributeCurrent, bonusAttribute])  // counts all attributes and sends them to the store

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
  bonusAttribute: PropTypes.number.isRequired,
  totalStatName: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  setTottalStat: PropTypes.func.isRequired,
  totalAttribute: PropTypes.number.isRequired
}

export default connect((store, ownProps) => {
  return {
    bonusAttribute: store.bonusReducer.armorBonus[ownProps.statName],
    attributeCurrent: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName],

  }
}, {
  disableButton,
  incrementStat,
  setTottalStat
})(AttributeComp)