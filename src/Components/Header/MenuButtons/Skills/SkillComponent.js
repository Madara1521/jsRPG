import React from "react"
import skills from './skill-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { useStyles } from "../../Header"

const SkillComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='skills'>
      <div className={classes.iconStyle}>
        <img src={skills} alt='skills' />
      </div>
    </NavLink>
  )
}

export default SkillComponent