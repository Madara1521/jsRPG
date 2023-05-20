import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { connect, useSelector } from "react-redux"
import { incrementExperience, incrementPoints, updateLevel } from "../../../../Redux/actions"

const LeftTable = ({ incrementPoints, updateLevel, incrementExperience }) => {
  const classes = useStyles()
  const level = useSelector(state => state.levelReducer.level)
  const experience = useSelector(state => state.levelReducer.experience)
  const nextLevel = useSelector(state => state.levelReducer.nextLevel)

  const addExperience = () => {
    incrementExperience()
  }

  useEffect(() => {
    if (experience >= nextLevel) {
      updateLevel(experience)
      incrementPoints()
    }
  }, [updateLevel,incrementPoints,experience, nextLevel])

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
          <button onClick={addExperience} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default connect(null, { incrementPoints, updateLevel, incrementExperience })(LeftTable)