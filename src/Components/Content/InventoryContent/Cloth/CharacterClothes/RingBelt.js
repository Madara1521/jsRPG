import React from "react"
import { makeStyles } from "@mui/styles"
import { connect, useDispatch } from "react-redux"
import { PropTypes } from 'prop-types'
import { addItemToColthHelper, itemUpdateHelper, removeItemHelper, renderImgHelper } from "../../../../../helpers/helperCloth"
import { getViewDescription } from "../../../../../Redux/actions"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2px'
  },
  amuletAndRing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '35px',
    width: '35px'
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
  imgBelts: {
    display: 'flex',
    maxHeight: '30px',
    maxWidth: '80px'
  },
  imgRings: {
    display: 'flex',
    maxHeight: '35px',
    maxWidth: '35px'
  }
})

const nullBelt = {
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeBelt: null,
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

const nullRing = {
  requirements: {
    requiredLevel: null,
    typeRing: null,
  },
  info: {
    id: null,
    rarity: null,
    classItem: null,
    lootName: null,
    img: null,
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null,
    attackRatingBonus: null
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
    beltRequirements,
    activeRing,
    activeSecondRing,
    imgRing,
    imgSecondRing,
    ringInfo,
    secondRingInfo,
    ringRequirements,
    secondRingRequirements,
    ringId,
    secondRingId,
    selectedId,
    getViewDescription } = props

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

  const handleClickRing = () => {
    if (selectedId === secondRingId) {
      getViewDescription({}, {})
    }
    if (selectedId !== secondRingId) {
      addItemToColthHelper(
        {
          dispatch,
          itemInfo: ringInfo,
          itemRequirements: ringRequirements,
          stingItem: 'ring',
          activeItem: activeRing,
          strignActiveitem: 'activeRing',
          bonus: { info, requirements },
          stringBonus: 'ringBonus',
          arrayType: 'ringsAmulet',
          classItem,
          id
        }
      )
    }
  }

  const removeRing = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeRing,
      nullValue: nullRing,
      stringBonus: 'ringBonus',
      arrayType: 'ringsAmulet',
      updateItem: itemUpdateHelper(ringInfo, ringRequirements),
      strignActiveitem: 'activeRing',
    }
  )

  const handleClickSecondRing = () => {
    if (selectedId === ringId) {
      getViewDescription({}, {})
    }
    if (selectedId !== ringId) {
      addItemToColthHelper(
        {
          dispatch,
          itemInfo: secondRingInfo,
          itemRequirements: secondRingRequirements,
          stingItem: 'ring',
          activeItem: activeSecondRing,
          strignActiveitem: 'activeSecondRing',
          bonus: { info, requirements },
          stringBonus: 'secondRingBonus',
          arrayType: 'ringsAmulet',
          classItem,
          id
        }
      )
    }
  }

  const removeSecondRing = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeSecondRing,
      nullValue: nullRing,
      stringBonus: 'secondRingBonus',
      arrayType: 'ringsAmulet',
      updateItem: itemUpdateHelper(secondRingInfo, secondRingRequirements),
      strignActiveitem: 'activeSecondRing',
    }
  )

  return (
    <div className={classes.colthPadding}>
      <div className={classes.amuletAndRing} onClick={handleClickRing} onDoubleClick={removeRing}>
        {renderImgHelper(imgRing, classes.imgRings)}
      </div>
      <div className={classes.armorBeltHelmPading} onClick={handleClickBelt} onDoubleClick={removeBelt}>
        <div className={classes.belt}>
          {renderImgHelper(imgBelt, classes.imgBelts)}
        </div>
      </div>
      <div className={classes.amuletAndRing} onClick={handleClickSecondRing} onDoubleClick={removeSecondRing}>
        {renderImgHelper(imgSecondRing, classes.imgRings)}
      </div>
    </div>
  )
}

RingBelt.propTypes = {
  classItem: PropTypes.string,
  activeBelt: PropTypes.bool,
  imgBelt: PropTypes.string,
  activeRing: PropTypes.bool,
  activeSecondRing: PropTypes.bool,
  imgRing: PropTypes.string,
  imgSecondRing: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  beltInfo: PropTypes.object.isRequired,
  ringInfo: PropTypes.object.isRequired,
  secondRingInfo: PropTypes.object.isRequired,
  beltRequirements: PropTypes.object.isRequired,
  ringRequirements: PropTypes.object.isRequired,
  secondRingRequirements: PropTypes.object.isRequired,
  selectedId: PropTypes.string,
  ringId: PropTypes.string,
  secondRingId: PropTypes.string,
  getViewDescription: PropTypes.func.isRequired,
}

export default connect((store) => ({
  classItem: store.lootAndDescriptionReducer.description.classItem,
  activeBelt: store.lootAndDescriptionReducer.activeBelt,
  activeRing: store.lootAndDescriptionReducer.activeRing,
  activeSecondRing: store.lootAndDescriptionReducer.activeSecondRing,
  imgBelt: store.bonusReducer.beltBonus.info.img,
  imgRing: store.bonusReducer.ringBonus.info.img,
  imgSecondRing: store.bonusReducer.secondRingBonus.info.img,
  id: store.lootAndDescriptionReducer.id,
  info: store.lootAndDescriptionReducer.description,
  requirements: store.lootAndDescriptionReducer.requirements,
  beltInfo: store.bonusReducer.beltBonus.info,
  ringInfo: store.bonusReducer.ringBonus.info,
  secondRingInfo: store.bonusReducer.secondRingBonus.info,
  beltRequirements: store.bonusReducer.beltBonus.requirements,
  ringRequirements: store.bonusReducer.ringBonus.requirements,
  secondRingRequirements: store.bonusReducer.secondRingBonus.requirements,
  selectedId: store.lootAndDescriptionReducer.description.id,
  ringId: store.bonusReducer.ringBonus.info.id,
  secondRingId: store.bonusReducer.secondRingBonus.info.id,
}), {getViewDescription})(RingBelt)