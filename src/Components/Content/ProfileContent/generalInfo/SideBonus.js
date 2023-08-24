import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const SideBonus = (props) => {
  const {
    name,
    bonus,
  } = props

  return (
    <div>{name}: {bonus}%</div>
  )
}

SideBonus.propTypes = {
  name: PropTypes.string.isRequired,
  bonus: PropTypes.number.isRequired,
}

export default connect((store, ownProps) => {
  return {
    bonus: store.generalInformationReducer[ownProps.bonusName]
  }
}, { })(SideBonus)
