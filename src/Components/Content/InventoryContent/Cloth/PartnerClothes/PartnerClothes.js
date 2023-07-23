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
    border: 'black 1px solid',
  },
  partnerClothes: {
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'black 1px solid',
    padding: '3px',
    height: '370px'
  }
})


const PartnerClothes = () => {
  const classes = useStyles()

  return (
    <div className={classes.clothPartner}>
      <div className={classes.invertoryClothTitle} >
        <div>Partner</div>
      </div>
      <div className={classes.partnerClothes}>
        <HemletPartner />
        <WeaponArmorShieldPartner />
      </div>
    </div>
  )
}

export default PartnerClothes