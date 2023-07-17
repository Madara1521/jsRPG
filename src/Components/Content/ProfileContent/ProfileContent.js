import React from "react"
import PhotoAndLvl from "./PhotoAndLvl"
import Characteristics from "./characteristics/Characteristics"
import GeneralInfo from "./GeneralInfo"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '37px'
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
  }
})

const ProfileContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <div className={classes.profile}>
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
      </div>
    </div>
  )
}

export default ProfileContent