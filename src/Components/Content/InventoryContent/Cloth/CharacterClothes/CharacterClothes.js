import React from "react"
import HelmetAmulet from "./HelmetAmulet"
import WeaponArmorShield from "./WeaponArmorShield"
import RingBelt from "./RingBelt"
import GlovesBoots from "./GlovesBoots"
import { makeStyles } from "@mui/styles"
import divImg from '../../../img/divBackground.png'


const useStyles = makeStyles({
  characterCloth: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundImage: `url(${divImg})`,
  },
  invertoryClothTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px ridge #a3a3a3',
  },
  characterClothes: {
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '3px ridge #a3a3a3',
    padding: '3px',
    height: '380px',
  }
})


const CharacterClothes = () => {
  const classes = useStyles()

  return (
    <div className={classes.characterCloth}>
      <div className={classes.invertoryClothTitle}>
        Rubaka115
      </div>
      <div className={classes.characterClothes}>
        <HelmetAmulet />
        <WeaponArmorShield />
        <RingBelt />
        <GlovesBoots />
      </div>
    </div>
  )
}

export default CharacterClothes