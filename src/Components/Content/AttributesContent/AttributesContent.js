import React from "react"
import Attributes from "./Attributes/Attributes"
import AttributeLevelInfo from "./AttributeLvlInfo/AttributeLevelInfo"
import { makeStyles } from "@mui/styles"
import divImg from '../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    [theme.breakpoints.down("sm")]: {
      height: 'calc(100vh - 62px)'
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
  placing: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${divImg})`,
    backgroundSize: 'cover',
  }
}))

const AttributeContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <div className={classes.placing}>
        <h1>Attributes</h1>
        <AttributeLevelInfo />
        <Attributes />
      </div>
    </div>
  )
}

export default AttributeContent