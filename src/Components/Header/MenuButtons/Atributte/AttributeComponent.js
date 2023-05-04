import React from "react"
import attribute from './attributes-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const AttributeComponent = () => {

  return (
    <NavLink to='attributes'>
      <IconsHeader>
        <img src={attribute} alt='attribute' />
      </IconsHeader>
    </NavLink>
  )
}

export default AttributeComponent