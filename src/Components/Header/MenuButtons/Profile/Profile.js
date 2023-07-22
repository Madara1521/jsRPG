import React from "react"
import pentagram from './Penta-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const Profile = () => {
  const classes = useStyles()

  return (
    <NavLink to='/'>
      <div className={classes.iconStyle}>
        <img src={pentagram} alt='pentagram' />
      </div>
    </NavLink>
  )
}

export default Profile