import React from "react"
import attribute from './attributes-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const AttributeComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='attributes'>
      <div className={classes.iconStyle}>
        <img src={attribute} alt='attribute' />
      </div>
    </NavLink>
  )
}

export default AttributeComponent