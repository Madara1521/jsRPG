import React from "react"
import pentagram from './Penta-removebg-preview.png'
import { IconsHeader } from "../../StyledHeader"

const Profile = () => {

  return(
    <IconsHeader >
      <img src={pentagram} alt='pentagram'/>
    </IconsHeader>
  )
}

export default Profile