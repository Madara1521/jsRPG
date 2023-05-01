import React from "react"
import skills from './skill-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"

const SkillComponent = () => {

  return(
    <IconsHeader>
      <img src={skills} alt='skills'/>
    </IconsHeader>
  )
}

export default SkillComponent