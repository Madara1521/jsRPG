import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../../Styles"
import IconsAttribute from "../IconsAttribute"
import { AttributeButton } from "../../../../Header/StyledHeader"
import { connect, useSelector } from "react-redux"
import { disableButton, incrementDexterity,totalDexterity } from "../../../../../Redux/actions"


const Dexterity = ({ incrementDexterity, disableButton, totalDexterity }) => {
  const classes = useStyles()
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const points = useSelector(state => state.attributeReducer.points)
  const isButtonDisabled = useSelector(state => state.attributeReducer.isButtonDisabled)

  const dexterityArmor = useSelector(state => state.bonusReducer.armorBonus.dexterity)
  const allDexterity = dexterity + dexterityArmor
  useEffect(() => {
    totalDexterity(allDexterity)
  },[totalDexterity, allDexterity])



  const addDexterity = () => {
    incrementDexterity()

    if (points === 1 ){
      disableButton()
    }
  }

  return (
    <Stack direction='row'>
      <div className={classes.attribCont}>
        Dexterity
      </div>
      <div className={classes.attribCont}>
        {dexterity}
      </div>
      <AttributeButton onClick={() => addDexterity()} disabled={isButtonDisabled}>
        <IconsAttribute />
      </AttributeButton>
    </Stack>
  )
}

export default connect(null,{ incrementDexterity, disableButton, totalDexterity })(Dexterity)