import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const CharacteristicsComp = (props) => {
  const {
    name,
    totalAttribute,
  } = props

  return (
    <div>{name.charAt(0).toUpperCase() + name.slice(1)}: {totalAttribute}</div>
  )
}

CharacteristicsComp.propTypes = {
  totalStatName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalAttribute: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    totalAttribute: store.characteristicsReducer[ownProps.totalStatName]
  }
}, { })(CharacteristicsComp)


