import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  amuletAndRing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '25px',
    width: '25px'
  },
  armorBeltHelmPading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px'
  },
  belt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '25px',
    width: '80px'
  },
})

const RingBelt = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.amuletAndRing}>

      </div>
      <div className={classes.armorBeltHelmPading}>
        <div className={classes.belt}>

        </div>
      </div>
      <div className={classes.amuletAndRing}>

      </div>
    </div>
  )
}

export default RingBelt