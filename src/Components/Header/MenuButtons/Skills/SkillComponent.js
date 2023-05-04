import React from "react"
import skills from './skill-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const SkillComponent = () => {

  return (
    <NavLink to='skills'>
      <IconsHeader>
        <img src={skills} alt='skills' />
      </IconsHeader>
    </NavLink>
  )
}

export default SkillComponent