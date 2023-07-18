import React from "react"
import PhotoAndLvl from "./PhotoAndLvl"
import Characteristics from "./characteristics/Characteristics"
import GeneralInfo from "./GeneralInfo"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  content: {
    display: 'flex',
    color: 'rgb(237, 237, 237)',
    fontSize: '20px',
    '-webkit-text-stroke': '0.3px black',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0',
      height: '0'
    }
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    background: 'linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(77,77,77,1) 30%, rgba(77,77,77,1) 55%, rgba(54,54,54,1) 98%)',
    letterSpacing: '2px',
    color: 'rgb(214, 0, 0)',
    '-webkit-text-stroke': '0.5px black',
    fontSize: '17px',
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