import React from "react"
import { useStyles } from "../../../../Styles"
import { getViewDescription } from "../../../../../Redux/actions"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'



const LootComp = (props) => {
  const classes = useStyles()
  const {
    lootName,
    color,
    info,
    getViewDescription} = props

  const viewItem = () => {
    getViewDescription(info)
  }

  return (
    <div onClick={() => viewItem()} className={classes[color]}>
      {lootName}
    </div>
  )
}

LootComp.propTypes ={
  lootName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  getViewDescription: PropTypes.func.isRequired
}

export default connect(null, {getViewDescription})(LootComp)