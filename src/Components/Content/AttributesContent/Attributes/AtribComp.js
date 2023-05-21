import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { connect, useSelector } from "react-redux"
import { AttributeButton } from "../../../Header/StyledHeader"
import IconsAttribute from "./IconsAttribute"
import { disableButton } from '../../../../Redux/actions'
import { useStyles } from "../../../Styles"



const AtribComp = ({ name, total, increment, disableButton }) => {
  const classes = useStyles()
  const attributeName = useSelector(state => state.attributeReducer[name])
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const armor = useSelector(state => state.bonusReducer.armorBonus[name])
  const all = attributeName + armor
  useEffect(() => {
    const totalAtrib = total
    totalAtrib(all)
  }, [total, all])

  const addAttribute = () => {
    increment()

    if (points === 1) {
      disableButton()
    }
  }


  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
      <div className={classes.attribCont}>
        {attributeName}
      </div>
      <div>
        <AttributeButton onClick={() => addAttribute()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </Stack>
  )
}

export default connect(null, { disableButton })(AtribComp)