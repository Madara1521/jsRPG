import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { useDispatch, useSelector } from "react-redux"
import { incrementExperience, incrementPoints, updateLevel } from "../../../../Redux/actions"

const LeftTable = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const level = useSelector(state => state.levelReducer.level)
  const experience = useSelector(state => state.levelReducer.experience)
  const nextLevel = useSelector(state => state.levelReducer.nextLevel)


  const addExperience = () => {
    dispatch(incrementExperience())
    
  }

  useEffect(() => {
    if (experience === nextLevel ){
      dispatch(updateLevel())
      console.log('levelUP')
      dispatch(incrementPoints())
      console.log('experienceUP')
    }
  },[dispatch,experience,nextLevel])


  return (
    <Stack direction='column' flex={1} className={classes.lvlHeight}>
      <div className={classes.expLvlBor}>
        Nikname
      </div>
      <Stack direction='row' flex={6}>
        <Stack direction='column' flex={2} className={classes.expLvlBor}>
          <div>Level</div>
          <div>{level}</div>
        </Stack>
        <Stack direction='column' flex={4} className={classes.expLvlBor}>
          <div>Experience</div>
          <div>{experience}</div>
          <button onClick={addExperience}/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default LeftTable