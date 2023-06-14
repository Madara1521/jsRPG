import React from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  weaponAndShield: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '150px',
    width: '80px'
  },
  armorBeltHelmPading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px'
  },
  armor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '120px',
    width: '80px'
  },
})

const WeaponArmorShield = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.weaponAndShield}>

      </div>
      <div className={classes.armorBeltHelmPading}>
        <div className={classes.armor}>

        </div>
      </div>
      <div className={classes.weaponAndShield}>

      </div>
    </div>
  )
}

export default WeaponArmorShield