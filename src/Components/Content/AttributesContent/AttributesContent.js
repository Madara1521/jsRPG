import React from "react"
import Attributes from "./Attributes/Attributes"
import AttributeLevelInfo from "./AttributeLvlInfo/AttributeLevelInfo"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flex: 2,
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
  placing: {
    display: 'flex',
    flexDirection: 'column',
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