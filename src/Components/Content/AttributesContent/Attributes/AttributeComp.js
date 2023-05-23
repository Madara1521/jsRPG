import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { connect, useSelector } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import { disableButton, incrementStat, setTottalStat } from '../../../../Redux/actions'
import { useStyles } from "../../../Styles"


const AttributeComp = ({ totalStatName, statName, incrementStat, disableButton, setTottalStat, current }) => {
  const classes = useStyles()
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const bonusAttribute = useSelector(state => state.bonusReducer.armorBonus[statName])

  useEffect(() => {
    setTottalStat(totalStatName, current, bonusAttribute)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, bonusAttribute])

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

export default connect((store, ownProps) => {
  return {
    current: store.attributeReducer[ownProps.statName]
  }
}, { disableButton, incrementStat, setTottalStat })(AttributeComp)