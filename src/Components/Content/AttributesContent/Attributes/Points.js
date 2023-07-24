import React, { useEffect } from "react"
import { connect } from "react-redux"
import { activeButton } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flexDirection: 'column',
  },
  points: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 3px solid',
    width: '60px',
    height: '30px'
  }
}))

const Points = (props) => {
  const { activeButton, points } = props
  const classes = useStyles()

  useEffect(() => {
    if (points > 0) {
      activeButton()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])

  return (
    <div className={classes.placing}>
      <div>
        <div className={classes.points}>
          Points
        </div>
        <div className={classes.points}>
          {points}
        </div>
      </div>
    </div>
  )
}

Points.propTypes = {
  points: PropTypes.number.isRequired,
  activeButton: PropTypes.func.isRequired
}

export default connect(store => {
  return {
    points: store.attributeReducer.points
  }
}, { activeButton })(Points)