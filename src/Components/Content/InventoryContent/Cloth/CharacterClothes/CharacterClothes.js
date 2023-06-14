import React from "react"
import HemletAmulet from "./HemletAmulet"
import WeaponArmorShield from "./WeaponArmorShield"
import RingBelt from "./RingBelt"
import GlovesBoots from "./GlovesBoots"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  clothPartnerAndCharacter: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column'
  },
  invertoryClothTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 1px solid',
  },
  characterClothes: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'black 1px solid',
    padding: '3px',
    height: '370px'
  }
})


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