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
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeGloves: null,
  },
  info: {
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
    attackRatingBonus: null,
  }
}
const nullBoots = {
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeBoots: null,
  },
  info: {
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
}

const GlovesBoots = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    activeGloves,
    activeBoots,
    imgGloves,
    imgBoots,
    classItem,
    glovesInfo,
    glovesRequirements,
    bootsInfo,
    bootsRequirements,
    info,
    requirements,
    id } = props

  const handleClickGloves = () => addItemToColthHelper(
    {
      dispatch,
      itemInfo: glovesInfo,
      itemRequirements: glovesRequirements,
      stingItem: 'gloves',
      activeItem: activeGloves,
      strignActiveitem: 'activeGloves',
      bonus: { info, requirements },
      stringBonus: 'glovesBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItem,
      id
    }
  )

  const removeGloves = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeGloves,
      stringBonus: 'glovesBonus',
      nullValue: nullGloves,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(glovesInfo, glovesRequirements),
      strignActiveitem: 'activeGloves',
    }
  )

  const handleClickBoots = () => addItemToColthHelper(
    {
      dispatch,
      itemInfo: bootsInfo,
      itemRequirements: bootsRequirements,
      requirements: {},
      stingItem: 'boots',
      activeItem: activeBoots,
      strignActiveitem: 'activeBoots',
      bonus: { info, requirements },
      stringBonus: 'bootsBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItem,
      id
    }
  )

  const removeBoots = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeBoots,
      stringBonus: 'bootsBonus',
      nullValue: nullBoots,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(bootsInfo, bootsRequirements),
      strignActiveitem: 'activeBoots',
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
  id: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  glovesInfo: PropTypes.object.isRequired,
  glovesRequirements: PropTypes.object.isRequired,
  bootsInfo: PropTypes.object.isRequired,
  bootsRequirements: PropTypes.object.isRequired,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeGloves: store.lootAndDescriptionReducer.activeGloves,
    activeBoots: store.lootAndDescriptionReducer.activeBoots,
    imgGloves: store.bonusReducer.glovesBonus.info.img,
    imgBoots: store.bonusReducer.bootsBonus.info.img,
    info: store.lootAndDescriptionReducer.description,
    requirements: store.lootAndDescriptionReducer.requirements,
    id: store.lootAndDescriptionReducer.id,
    glovesInfo: store.bonusReducer.glovesBonus.info,
    bootsInfo: store.bonusReducer.bootsBonus.info,
    glovesRequirements: store.bonusReducer.glovesBonus.requirements,
    bootsRequirements: store.bonusReducer.bootsBonus.requirements,
  }),
  {}
)(GlovesBoots)

