import React from "react"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  trade: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column'
  }
}))

const TradeContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.content} >
      <h1>Trade</h1>
      <div className={classes.trade}>

      </div>
    </div>
  )
}

export default TradeContent