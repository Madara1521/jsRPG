import React from "react"
import { makeStyles } from "@mui/styles"
import { connect, useDispatch } from "react-redux"
import { PropTypes } from 'prop-types'
import { addItemToColthHelper, itemUpdateHelper, removeItemHelper, renderImgHelper } from "../../../../../helpers/helperCloth"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
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
    padding: '2px'
  },
  belt: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    borderRadius: '15%',
    height: '30px',
    width: '80px'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '30px',
    maxWidth: '80px'
  }
})

const nullBelt = {
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
  },
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeBelt: null,
  }
}

const RingBelt = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    classItem,
    activeBelt,
    imgBelt,
    id,
    info,
    requirements,
    beltInfo,
    beltRequirements } = props

  const handleClickBelt = () => addItemToColthHelper(
    {
      dispatch,
      itemInfo: beltInfo,
      itemRequirements: beltRequirements,
      stingItem: 'belt',
      activeItem: activeBelt,
      strignActiveitem: 'activeBelt',
      bonus: { info, requirements },
      stringBonus: 'beltBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItem,
      id
    }
  )

  const removeBelt = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeBelt,
      stringBonus: 'beltBonus',
      nullValue: nullBelt,
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(beltInfo, beltRequirements),
      strignActiveitem: 'activeBelt',
    }
  )

  return (
    <div className={classes.colthPadding}>
      <div className={classes.amuletAndRing}>

      </div>
      <div className={classes.armorBeltHelmPading} onClick={handleClickBelt} onDoubleClick={removeBelt}>
        <div className={classes.belt}>
          {renderImgHelper(imgBelt, classes.imgDescription)}
        </div>
      </div>
      <div className={classes.amuletAndRing}>

      </div>
    </div>
  )
}

RingBelt.propTypes = {
  classItem: PropTypes.string,
  activeBelt: PropTypes.bool,
  imgBelt: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  beltInfo: PropTypes.object.isRequired,
  beltRequirements: PropTypes.object.isRequired
}

export default connect((store) => ({
  classItem: store.lootAndDescriptionReducer.description.classItem,
  activeBelt: store.lootAndDescriptionReducer.activeBelt,
  imgBelt: store.bonusReducer.beltBonus.info.img,
  id: store.lootAndDescriptionReducer.id,
  info: store.lootAndDescriptionReducer.description,
  requirements: store.lootAndDescriptionReducer.requirements,
  beltInfo: store.bonusReducer.beltBonus.info,
  beltRequirements: store.bonusReducer.beltBonus.requirements,
}), {})(RingBelt)