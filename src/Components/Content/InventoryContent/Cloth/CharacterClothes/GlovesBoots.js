import React from "react"
import { makeStyles } from "@mui/styles"
import { connect, useDispatch } from "react-redux"
import { PropTypes } from 'prop-types'
import {
  addItemToColthHelper,
  itemUpdateHelper,
  removeItemHelper,
  renderImgHelper
} from "../../../../../helpers/helperCloth"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1px'
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
  energy: null,
  attackRatingBonus: null
}
const nullBoots = {
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
  energy: null,
  attackRatingBonus: null
}

const GlovesBoots = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    activeGloves,
    activeBoots,
    imgGloves,
    imgBoots,
    bonus,
    gloves,
    boots,
    classItem,
    id } = props

  const handleClickGloves = () => addItemToColthHelper(
    {
      dispatch,
      item: gloves,
      requirements: {},
      stingItem: 'gloves',
      activeItem: activeGloves,
      strignActiveitem: 'activeGloves',
      bonus: bonus,
      stringBonus: 'glovesBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItems: classItem,
      id
    }
  )

  const removeGloves = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeGloves,
      stingItem: 'gloves',
      stringBonus: 'glovesBonus',
      nullValue: nullGloves,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(gloves),
      strignActiveitem: 'activeGloves',
      classItems: classItem
    }
  )

  const handleClickBoots = () => addItemToColthHelper(
    {
      dispatch,
      item: boots,
      requirements: {},
      stingItem: 'boots',
      activeItem: activeBoots,
      strignActiveitem: 'activeBoots',
      bonus: bonus,
      stringBonus: 'bootsBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItems: classItem,
      id
    }
  )

  const removeBoots = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeBoots,
      stingItem: 'boots',
      stringBonus: 'bootsBonus',
      nullValue: nullBoots,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(boots),
      strignActiveitem: 'activeBoots',
      classItems: classItem
    }
  )

  return (
    <div className={classes.colthPadding}>
      <div
        className={classes.glovesAndBoots}
        onClick={handleClickGloves}
        onDoubleClick={removeGloves}
      >
        {renderImgHelper(imgGloves, classes.imgDescription)}
      </div>
      <div className={classes.paddingGloves} />
      <div
        className={classes.glovesAndBoots}
        onClick={handleClickBoots}
        onDoubleClick={removeBoots}
      >
        {renderImgHelper(imgBoots, classes.imgDescription)}
      </div>
    </div >
  )
}

GlovesBoots.propTypes = {
  classItem: PropTypes.string,
  activeGloves: PropTypes.bool,
  activeBoots: PropTypes.bool,
  imgGloves: PropTypes.string,
  imgBoots: PropTypes.string,
  bonus: PropTypes.object.isRequired,
  gloves: PropTypes.object.isRequired,
  boots: PropTypes.object.isRequired,
  id: PropTypes.string
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeGloves: store.lootAndDescriptionReducer.activeGloves,
    activeBoots: store.lootAndDescriptionReducer.activeBoots,
    imgGloves: store.bonusReducer.glovesBonus.img,
    imgBoots: store.bonusReducer.bootsBonus.img,
    bonus: store.lootAndDescriptionReducer.description,
    gloves: store.bonusReducer.glovesBonus,
    boots: store.bonusReducer.bootsBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  {}
)(GlovesBoots)

