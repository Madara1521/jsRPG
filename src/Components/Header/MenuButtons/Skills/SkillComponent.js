import React from "react"
import skills from './skill-removebg-preview.png'
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import backgroundImage from '../backgroundItem.png'

const useStyles = makeStyles({
  skills: {
    display: 'flex',
    width: '100px',
    height: '100px',
    border: 'black 1px solid',
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
})

const SkillComponent = () => {
  const classes = useStyles()

  return (
    <NavLink to='skills'>
      <div className={classes.skills}>
        <img src={skills} alt='skills' />
      </div>
    </NavLink>
  )
}

export default SkillComponent