import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import { connect } from "react-redux"
import {
  getViewDescription,
  setDeleteHelmet,
  setHelmetBonus,
  setPushHelmet,
} from "../../../../../Redux/actions"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  endAmulet: {
    display: 'flex',
    alignItems: 'end'
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
  helmet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '70px',
    width: '70px'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '75px',
    maxWidth: '75px'
  }
})

const nullHelmet = {
  id: null,
  rarity: null,
  classItem: null,
  lootName: null,
  img: null,
  requiredLevel: null,
  defense: null,
  strength: null,
  dexterity: null,
  vitality: null,
  energy: null
}

const HelmetAmulet = (props) => {
  const classes = useStyles()
  const {
    classItem,
    imgHelmet,
    setHelmetBonus,
    helmetBonus,
    getViewDescription,
    setDeleteHelmet,
    index,
    helmet,
    setPushHelmet } = props

  const [activeHelmet, setActiveHelmet] = useState(false)

  const helmetUpdate = {info:helmet}

  const helmetClick = () => {
    getViewDescription(helmet)
    if (activeHelmet === false) {
      if (classItem === 'helmet') {
        setHelmetBonus(helmetBonus)
        setActiveHelmet(true)
        setDeleteHelmet(index)
      }
    }
  }

  const removingTheHelmet = () => {
    if (activeHelmet === true) {
      if (classItem === 'helmet') {
        setHelmetBonus(nullHelmet)
        setPushHelmet(helmetUpdate)
        setActiveHelmet(false)
      }
    }
    getViewDescription({})
  }

  const renderImg = (img) => {
    return img ? <img className={classes.imgDescription} src={img} alt='img' /> : null
  }


  return (
    <div className={classes.colthPadding}>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
      <div className={classes.armorBeltHelmPading} >
        <div className={classes.helmet} onClick={helmetClick} onDoubleClick={removingTheHelmet}>
          {renderImg(imgHelmet)}
        </div>
      </div>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
    </div>
  )
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeItem: store.lootAndDescriptionReducer.activeItem,
    helmetGlovesBootsBelt: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    imgHelmet: store.bonusReducer.helmetBonus.img,
    helmetBonus: store.lootAndDescriptionReducer.description,
    helmet: store.bonusReducer.helmetBonus,
    index: store.lootAndDescriptionReducer.index,
  }),
  { setHelmetBonus, getViewDescription, setDeleteHelmet, setPushHelmet }
)(HelmetAmulet)