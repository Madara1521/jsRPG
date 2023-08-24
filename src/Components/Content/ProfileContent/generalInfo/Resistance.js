import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const Resistance = (props) => {
  const {
    name,
    resist,
  } = props

  return (
    <div>{name}: {resist}%</div>
  )
}

Resistance.propTypes = {
  name: PropTypes.string.isRequired,
  resist: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    resist: store.generalInformationReducer[ownProps.resistName]
  }
}, { })(Resistance)
