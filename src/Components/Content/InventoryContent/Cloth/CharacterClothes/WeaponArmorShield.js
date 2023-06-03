import React from "react"
import { useStyles } from "../../../../Styles"


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