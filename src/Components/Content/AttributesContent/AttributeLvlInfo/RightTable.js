import React from "react"
import { connect } from "react-redux"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100px',
    backdropFilter: 'blur(3px)',
  },
  nextLevel: {
    display: 'flex',
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
  },
  class: {
    display: 'flex',
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

const RigthTable = ({ nextLevel }) => {
  const classes = useStyles()

  return (
    <div className={classes.placing}>
      <div className={classes.class}>
        Barbarian
      </div>
      <div className={classes.nextLevel}>
        <div>Next Level</div>
        <div>{nextLevel}</div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    nextLevel: store.levelReducer.nextLevel
  }
})(RigthTable)