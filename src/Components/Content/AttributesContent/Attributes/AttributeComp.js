import React from "react"
import { connect } from "react-redux"
import { AttributeButton } from "../../../Header/StyledGlobal"
import IconsAttribute from "./IconsAttribute"
import {
  disableButton,
  incrementStat,
} from '../../../../Redux/actions'
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
    marginBottom: '40px',
  },
  attribCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px ridge #a3a3a3',
    width: '100px',
    height: '30px',
  },
}))

const AttributeComp = (props) => {
  const classes = useStyles()
  const {
    statName,
    incrementStat,
    disableButton,
    attributeCurrent,
    points,
    isButtonDisabled,
  } = props

  const addAttribute = () => {
    incrementStat(statName)

    if (points === 1) {
      disableButton()
    }
  }


  return (
    <div className={classes.placing}>
      <div className={classes.attribCont}>
        {statName.charAt(0).toUpperCase() + statName.slice(1)}
      </div>
      <div className={classes.attribCont}>
        {attributeCurrent}
      </div>
      <div>
        <AttributeButton onClick={() => addAttribute()} disabled={isButtonDisabled}>
          <IconsAttribute />
        </AttributeButton>
      </div>
    </div>
  )
}

AttributeComp.propTypes = {
  attributeCurrent: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool,
  statName: PropTypes.string.isRequired,
  incrementStat: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
}

export default connect((store, ownProps) => {
  return {
    attributeCurrent: store.attributeReducer[ownProps.statName],
    points: store.attributeReducer.points,
    isButtonDisabled: store.attributeReducer.isButtonDisabled,
  }
}, {
  disableButton,
  incrementStat,
})(AttributeComp)