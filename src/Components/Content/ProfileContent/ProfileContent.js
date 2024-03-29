import React from "react"
import PhotoAndLevel from "./PhotoAndLevel"
import Characteristics from "./characteristics/Characteristics"
import GeneralInfo from "./generalInfo/GeneralInfo"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    [theme.breakpoints.down("sm")]: { 
      height: 'calc(100vh - 124px)'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  profile: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column'
  }
}))

const ProfileContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <div className={classes.profile}>
        <h1>Profile</h1>
        <PhotoAndLevel />
        <h1>Characteristics</h1>
        <Characteristics />
        <h1>General information</h1>
        <GeneralInfo />
      </div>
    </div>
  )
}

export default ProfileContent