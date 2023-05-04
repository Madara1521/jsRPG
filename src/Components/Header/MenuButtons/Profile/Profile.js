import React from "react"
import pentagram from './Penta-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"
import { NavLink } from "react-router-dom"

const Profile = () => {

  return (
    <NavLink to='/'>
      <IconsHeader >
        <img src={pentagram} alt='pentagram' />
      </IconsHeader>
    </NavLink>
  )
}

export default Profile