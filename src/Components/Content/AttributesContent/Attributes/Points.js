import React, { useEffect } from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"
import { connect } from "react-redux"
import { activeButton } from "../../../../Redux/actions"
import { PropTypes } from 'prop-types'


const Points = (props) => {
  const { activeButton,points } = props
  const classes = useStyles()

  useEffect(() => {
    if (points > 0) {
      activeButton()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])

  return (
    <Stack direction='column'>
      <div>
        <div className={classes.pointsCont}>
          Points
        </div>
        <div className={classes.pointsCont}>
          {points}
        </div>
      </div>
    </Stack>
  )
}

Points.propTypes = {
  points: PropTypes.number.isRequired,
  activeButton: PropTypes.func.isRequired
}

export default connect(store => {
  return{
    points: store.attributeReducer.points
  }
}, { activeButton })(Points)