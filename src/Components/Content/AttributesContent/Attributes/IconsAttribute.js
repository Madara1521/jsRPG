import React from "react"
import pluse from './AtribPlus-removebg-preview.png'
import { useStyles } from "../../../Styles"


const IconsAttribute = () => {
  const classes = useStyles()

  return (
    <div className={classes.iconPluse}>
      <img src={pluse} alt='icon' />
    </div>
  )
}

export default IconsAttribute