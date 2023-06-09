import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'
import PhotoAndLvl from "./PhotoAndLvl"
import Characteristics from "./characteristics/Characteristics"
import GeneralInfo from "./GeneralInfo"

const ProfileContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Nikname</h1>
        </div>
        <PhotoAndLvl />
        <div className={classes.titleComp}>
          <h1>Characteristics</h1>
        </div>
        <Characteristics />
        <div className={classes.titleComp}>
          <h1>General information</h1>
        </div>
        <GeneralInfo />
      </Stack>
    </div>
  )
}

export default ProfileContent