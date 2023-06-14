import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  stackRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  stackColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  talismansCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
    width: '49px',
    height: '40px'
  },
})

const TalismansComp = () => {
  const classes = useStyles()

  return (
    <div className={classes.stackRow}>
      <div className={classes.stackColumn}>
        <div className={classes.talismansCont}>

        </div>
        <div className={classes.talismansCont}>

        </div>
      </div>
    </div>
  )
}

export default TalismansComp