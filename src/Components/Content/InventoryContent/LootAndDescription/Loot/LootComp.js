import React from "react"
import { useStyles } from "../../../../Styles"
import { getViewDescription } from "../../../../../Redux/actions"
import { connect } from "react-redux"



const LootComp = (props) => {
  const classes = useStyles()
  const {
    nameLoot,
    color,
    info,
    getViewDescription} = props

  const viewItem = () => {
    getViewDescription(info)
  }

  return (
    <div onClick={() => viewItem()} className={`${classes[color]}`}>
      {nameLoot}
    </div>
  )
}

export default connect(null, {getViewDescription})(LootComp)