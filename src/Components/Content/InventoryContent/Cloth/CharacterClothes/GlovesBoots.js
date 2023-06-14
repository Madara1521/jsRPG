import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  glovesAndBoots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '80px',
    width: '80px',
  },
  paddingGloves: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px'
  },
})

const GlovesBoots = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.glovesAndBoots}>

      </div>
      <div className={classes.paddingGloves} />
      <div className={classes.glovesAndBoots}>

      </div>
    </div>
  )
}

export default GlovesBoots