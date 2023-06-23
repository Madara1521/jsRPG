import React from "react"
import { makeStyles } from "@mui/styles"
import { connect, useDispatch } from "react-redux"
import { PropTypes } from 'prop-types'
import {
  addItemToColthHelper,
  itemUpdateHelper,
  removeItemHelper, 
  renderImgHelper} from "../../../../../helpers/helperCloth"

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
  const dispatch = useDispatch()
  const {
    classItem,
    imgHelmet,
    bonus,
    id,
    helmet,
    activeHelmet } = props

  const handleClickHelmet = () => addItemToColthHelper(
    {
      dispatch,
      item: helmet,
      stingItem: 'helmet',
      activeItem: activeHelmet,
      strignActiveitem: 'activeHelmet',
      bonus: bonus,
      stringBonus: 'helmetBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItems: classItem,
      id
    }
  )

  const removeHelmet = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeHelmet,
      stingItem: 'helmet',
      stringBonus: 'helmetBonus',
      nullValue: nullHelmet,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(helmet),
      strignActiveitem: 'activeHelmet',
      classItems: classItem
    }
  )


  return (
    <div className={classes.colthPadding}>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
      <div className={classes.armorBeltHelmPading} >
        <div className={classes.helmet} onClick={handleClickHelmet} onDoubleClick={removeHelmet}>
          {renderImgHelper(imgHelmet, classes.imgDescription)}
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
  bonus: PropTypes.object.isRequired,
  helmet: PropTypes.object.isRequired,
  id: PropTypes.string,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeHelmet: store.lootAndDescriptionReducer.activeHelmet,
    imgHelmet: store.bonusReducer.helmetBonus.img,
    bonus: store.lootAndDescriptionReducer.description,
    helmet: store.bonusReducer.helmetBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  {})(HelmetAmulet)