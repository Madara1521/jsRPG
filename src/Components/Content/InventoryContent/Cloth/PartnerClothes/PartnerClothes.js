import React from "react"
import HemletPartner from "./HemletPartner"
import WeaponArmorShieldPartner from "./WeaponArmorShieldPartner"
import { makeStyles } from "@mui/styles"
import divImg from '../../../img/divBackground.png'

const useStyles = makeStyles({
  clothPartner: {
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
  partnerClothes: {
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '3px ridge #a3a3a3',
    padding: '3px',
    height: '380px'
  }
})


const PartnerClothes = () => {
  const classes = useStyles()

  return (
    <div className={classes.clothPartner}>
      <div className={classes.partnerClothes}>
        <HemletPartner />
        <WeaponArmorShieldPartner />
      </div>
    </div>
  )
}

export default PartnerClothes