import React from "react"
import { makeStyles } from "@mui/styles"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import {
  setActiveItem,
  setItemBonus,
  getViewDescription,
  setDeleteItem,
  setPushCloth
} from '../../../../../Redux/actions'

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  glovesAndBoots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '80px',
    width: '80px',
  },
  paddingGloves: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '80px',
    maxWidth: '80px'
  }
})

const nullGloves = {
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

const GlovesBoots = (props) => {
  const classes = useStyles()
  const {
    classItem,
    activeGloves,
    // activeBoots,
    imgGloves,
    // imgBoots,
    glovesBonus,
    // bootsBonus,
    gloves,
    // boots,
    id,
    setActiveItem,
    setItemBonus,
    getViewDescription,
    setDeleteItem,
    setPushCloth } = props

  const glovesUpdate = { info: gloves }

  const glovesClick = () => {
    getViewDescription(gloves)
    if (activeGloves === false) {
      if (classItem === 'gloves') {
        setItemBonus('glovesBonus', glovesBonus)
        setDeleteItem('helmetGlovesBootsBelt', id)
        setActiveItem('activeGloves', true)
      }
    }
  }

  const removingTheGloves = () => {
    if (activeGloves === true) {
      if (classItem === 'gloves') {
        setItemBonus('glovesBonus', nullGloves)
        setPushCloth('helmetGlovesBootsBelt', glovesUpdate)
        setActiveItem('activeGloves', false)
      }
    }
    getViewDescription({})
  }

  const renderImg = (img) => {
    return img ? <img className={classes.imgDescription} src={img} alt='img' /> : null
  }

  return (
    <div className={classes.colthPadding}>
      <div className={classes.glovesAndBoots} onClick={glovesClick} onDoubleClick={removingTheGloves}>
        {renderImg(imgGloves)}
      </div>
      <div className={classes.paddingGloves} />
      <div className={classes.glovesAndBoots}>

      </div>
    </div>
  )
}

GlovesBoots.propTypes = {
  classItem: PropTypes.string,
  activeGloves: PropTypes.bool,
  activeBoots: PropTypes.bool,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeGloves: store.lootAndDescriptionReducer.activeGloves,
    activeBoots: store.lootAndDescriptionReducer.activeBoots,
    imgGloves: store.bonusReducer.glovesBonus.img,
    imgBoots: store.bonusReducer.bootsBonus.img,
    glovesBonus: store.lootAndDescriptionReducer.description,
    bootsBonus: store.lootAndDescriptionReducer.description,
    gloves: store.bonusReducer.glovesBonus,
    boots: store.bonusReducer.bootsBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  {
    setActiveItem,
    setItemBonus,
    getViewDescription,
    setDeleteItem,
    setPushCloth
  }
)(GlovesBoots)

