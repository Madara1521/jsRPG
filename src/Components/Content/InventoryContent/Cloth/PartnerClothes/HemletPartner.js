import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  helmet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '70px',
    width: '70px'
  }
})

const HemletPartner = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.helmet}>

      </div>
    </div>
  )
}

export default HemletPartner