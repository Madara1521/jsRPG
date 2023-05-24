import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { connect } from "react-redux"
import { incrementExperience, incrementPoints, updateLevel } from "../../../../Redux/actions"
import PropTypes from 'prop-types'

const LeftTable = (props) => {
  const classes = useStyles()

  const { incrementPoints, updateLevel, incrementExperience, level, experience, nextLevel } = props

  const addExperience = () => {
    incrementExperience()
  }

  useEffect(() => {
    if (experience >= nextLevel) {
      updateLevel(experience)
      incrementPoints()
    }
  }, [experience, nextLevel, incrementPoints, updateLevel])

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

LeftTable.propTypes = {
  level: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  nextLevel: PropTypes.number.isRequired
}

export default connect(store => {
  return {
    level: store.levelReducer.level,
    experience: store.levelReducer.experience,
    nextLevel: store.levelReducer.nextLevel
  }
}, { incrementPoints, updateLevel, incrementExperience })(LeftTable)