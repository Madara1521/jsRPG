import React, { useEffect } from "react"
import { makeStyles } from "@mui/styles"
import { connect } from "react-redux"
import {
  getViewDescription,
  setActiveItem,
  setDeleteItem,
  setItemBonus,
  setPushCloth,
} from "../../../../../Redux/actions"
import { PropTypes } from 'prop-types'

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
  defenseBonus: null,
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
    setItemBonus,
    helmetBonus,
    getViewDescription,
    setDeleteItem,
    id,
    helmet,
    setPushCloth,
    setActiveItem,
    activeHelmet } = props



  const helmetUpdate = { info: helmet }

  useEffect(() => {
    getViewDescription({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const helmetClick = () => {
    getViewDescription(helmet)
    if (activeHelmet === false) {
      if (classItem === 'helmet') {
        setItemBonus('helmetBonus',helmetBonus)
        setDeleteItem('helmetGlovesBootsBelt',id)
        setActiveItem('activeHelmet',true)
      }
    }
  }

  const removingTheHelmet = () => {
    if (activeHelmet === true) {
      if (classItem === 'helmet') {
        setItemBonus('helmetBonus',nullHelmet)
        setPushCloth('helmetGlovesBootsBelt',helmetUpdate)
        setActiveItem('activeHelmet',false)
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

HelmetAmulet.propTypes = {
  classItem: PropTypes.string,
  activeHelmet: PropTypes.bool,
  imgHelmet: PropTypes.string,
  helmetBonus: PropTypes.object.isRequired,
  helmet: PropTypes.object.isRequired,
  id: PropTypes.string,
  setActiveItem: PropTypes.func.isRequired,
  setItemBonus: PropTypes.func.isRequired,
  getViewDescription: PropTypes.func.isRequired,
  setDeleteItem: PropTypes.func.isRequired,
  setPushCloth: PropTypes.func.isRequired,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeHelmet: store.lootAndDescriptionReducer.activeHelmet,
    imgHelmet: store.bonusReducer.helmetBonus.img,
    helmetBonus: store.lootAndDescriptionReducer.description,
    helmet: store.bonusReducer.helmetBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  {
    setActiveItem,
    setItemBonus,
    getViewDescription,
    setDeleteItem,
    setPushCloth
  })(HelmetAmulet)