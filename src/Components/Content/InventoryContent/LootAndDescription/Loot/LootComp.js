import React from "react"
import { useStyles } from "../../../../Styles"



const LootComp = (props) => {
  const classes = useStyles()
  const {
    nameLoot,
    color} = props

  return (
    <div className={`${classes[color]}`}>
      {nameLoot}
    </div>
  )
}

export default LootComp