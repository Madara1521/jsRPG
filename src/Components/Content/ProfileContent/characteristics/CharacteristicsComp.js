import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const CharacteristicsComp = (props) => {
  const {
    name,
    totalAttribute,
  } = props

  return (
    <div>{name}: {totalAttribute}</div>
  )
}

CharacteristicsComp.propTypes = {
  name: PropTypes.string.isRequired,
  totalAttribute: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, { })(CharacteristicsComp)


