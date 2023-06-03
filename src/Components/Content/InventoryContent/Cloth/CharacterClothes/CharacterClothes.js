import React from "react"
import { useStyles } from "../../../../Styles"
import HemletAmulet from "./HemletAmulet"
import WeaponArmorShield from "./WeaponArmorShield"
import RingBelt from "./RingBelt"
import GlovesBoots from "./GlovesBoots"



const CharacterClothes = () => {
  const classes = useStyles()

  return (
    <div className={classes.clothPartnerAndCharacter}>
      <div className={classes.invertoryClothTitle}>
        <div>nickname</div>
      </div>
      <div className={classes.characterClothes}>
        <HemletAmulet />
        <WeaponArmorShield />
        <RingBelt />
        <GlovesBoots />
      </div>
    </div>
  )
}

export default CharacterClothes