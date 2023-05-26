import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { connect } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import { disableButton, incrementStat, setTottalStat, setPhysicalDamage } from '../../../../Redux/actions'
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
    current,
    points,
    isButtonDisabled,
    bonusAttribute,
    setPhysicalDamage,
    startPhyBonus,
    finalPhyBonus,
    totalStrength } = props

  useEffect(() => {
    setTottalStat(totalStatName, current, bonusAttribute)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, bonusAttribute])

  useEffect(() => {
    setPhysicalDamage(startPhyBonus, finalPhyBonus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalStrength, bonusAttribute])



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
        {current}
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
  current: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  startPhyBonus: PropTypes.number.isRequired,
  finalPhyBonus: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool,
  bonusAttribute: PropTypes.number.isRequired,
  totalStatName: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  setTottalStat: PropTypes.func.isRequired,
  setPhysicalDamage: PropTypes.func.isRequired,
  totalStrength: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    bonusAttribute: store.bonusReducer.armorBonus[ownProps.statName],
    current: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
    startPhyBonus: store.bonusReducer.weaponBonus.startPhyBonus,
    finalPhyBonus: store.bonusReducer.weaponBonus.finalPhyBonus,
    totalStrength: store.characteristicsReducer.totalStrength
  }
}, {
  disableButton,
  incrementStat,
  setTottalStat,
  setPhysicalDamage
})(AttributeComp)