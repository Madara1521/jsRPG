import React from "react"
import { useStyles } from "../../../../Styles"
import HemletPartner from "./HemletPartner"
import WeaponArmorShieldPartner from "./WeaponArmorShieldPartner"

const PartnerClothes = () => {
  const classes = useStyles()

  return (
    <div className={classes.clothPartnerAndPartner}>
      <div className={classes.invertoryClothTitle} >
        <div>nickname</div>
      </div>
      <div className={classes.characterClothes}>
        <HemletPartner />
        <WeaponArmorShieldPartner />
      </div>
    </div>
  )
}

export default PartnerClothes