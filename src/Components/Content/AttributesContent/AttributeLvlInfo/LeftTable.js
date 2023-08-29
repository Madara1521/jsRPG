import React, { useEffect } from "react"
import { connect } from "react-redux"
import { incrementPoints, updateLevel } from "../../../../Redux/actions"
import PropTypes from 'prop-types'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100px',
    backdropFilter: 'blur(3px)',
    [theme.breakpoints.down("sm")]: {
      minHeight: '200px',
    },
  },
  placingLevelAndExperience: {
    display: 'flex',
    flex: 6,
    flexDirection: 'row',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
    },
  },
  levelContainer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  experienceContainer: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nickname: {
    display: 'flex',
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))


const LeftTable = (props) => {
  const classes = useStyles()
  const {
    incrementPoints,
    updateLevel,
    level,
    experience,
    nextLevel } = props

  useEffect(() => {
    if (experience >= nextLevel) {
      updateLevel(experience)
      incrementPoints()
    }
  }, [experience, nextLevel, incrementPoints, updateLevel])

  return (
    <div className={classes.placing}>
      <div className={classes.nickname}>
        Nikname
      </div>
      <div className={classes.placingLevelAndExperience}>
        <div className={classes.levelContainer}>
          <div>Level</div>
          <div>{level}</div>
        </div>
        <div className={classes.experienceContainer}>
          <div>Experience</div>
          <div>{experience}</div>
        </div>
      </div>
    </div>
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
}, { incrementPoints, updateLevel })(LeftTable)