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
import { getViewDescription } from "../../../../../Redux/actions"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2px'
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
    height: '35px',
    width: '35px'
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
  imgDescriptionHelmet: {
    display: 'flex',
    maxHeight: '75px',
    maxWidth: '75px'
  },
  imgDescriptionAmulet: {
    display: 'flex',
    maxHeight: '35px',
    maxWidth: '35px'
  }
})

const nullHelmet = {
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeHelmet: null,
  },
  info: {
    id: null,
    rarity: null,
    classItem: null,
    lootName: null,
    img: null,
    defenseBonus: null,
    strength: null,
    dexterity: null,
    vitality: null,
    energy: null
  }
}
const nullAmulet = {
  requirements: {
    requiredLevel: null,
    typeAmulet: null,
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
    attackRatingBonus: null,
  }
}

const HelmetAmulet = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    classItem,
    imgHelmet,
    info,
    id,
    helmetInfo,
    activeHelmet,
    requirements,
    helmetRequirements,
    activeAmulet,
    activeSecondAmulet,
    imgAmulet,
    imgSecondAmulet,
    amuletInfo,
    secondAmuletInfo,
    amuletRequirements,
    secondAmuletRequirements,
    selectedId,
    amuletId,
    secondAmuletId,
    getViewDescription } = props


  const handleClickHelmet = () => addItemToColthHelper(
    {
      dispatch,
      itemInfo: helmetInfo,
      itemRequirements: helmetRequirements,
      stingItem: 'helmet',
      activeItem: activeHelmet,
      strignActiveitem: 'activeHelmet',
      bonus: { info, requirements },
      stringBonus: 'helmetBonus',
      arrayType: 'helmetGlovesBootsBelt',
      classItem,
      id
    }
  )

  const removeHelmet = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeHelmet,
      nullValue: nullHelmet,
      stringBonus: 'helmetBonus',
      arrayType: 'helmetGlovesBootsBelt',
      updateItem: itemUpdateHelper(helmetInfo, helmetRequirements),
      strignActiveitem: 'activeHelmet',
    }
  )

  const handleClickAmulet = () => {
    if (selectedId === secondAmuletId) {
      getViewDescription({}, {})
    }
    if (selectedId !== secondAmuletId) {
      addItemToColthHelper(
        {
          dispatch,
          itemInfo: amuletInfo,
          itemRequirements: amuletRequirements,
          stingItem: 'amulet',
          activeItem: activeAmulet,
          strignActiveitem: 'activeAmulet',
          bonus: { info, requirements },
          stringBonus: 'amuletBonus',
          arrayType: 'ringsAmulet',
          classItem,
          id
        }
      )
    }
  }

  const removeAmulet = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeAmulet,
      nullValue: nullAmulet,
      stringBonus: 'amuletBonus',
      arrayType: 'ringsAmulet',
      updateItem: itemUpdateHelper(amuletInfo, amuletRequirements),
      strignActiveitem: 'activeAmulet',
    }
  )

  const handleClickSecondAmulet = () => {
    if (selectedId === amuletId) {
      getViewDescription({}, {})
    }
    if (selectedId !== amuletId) {
      addItemToColthHelper(
        {
          dispatch,
          itemInfo: secondAmuletInfo,
          itemRequirements: secondAmuletRequirements,
          stingItem: 'amulet',
          activeItem: activeSecondAmulet,
          strignActiveitem: 'activeSecondAmulet',
          bonus: { info, requirements },
          stringBonus: 'secondAmuletBonus',
          arrayType: 'ringsAmulet',
          classItem,
          id
        }
      )
    }
  }

  const removeSecondAmulet = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeSecondAmulet,
      nullValue: nullAmulet,
      stringBonus: 'secondAmuletBonus',
      arrayType: 'ringsAmulet',
      updateItem: itemUpdateHelper(secondAmuletInfo, secondAmuletRequirements),
      strignActiveitem: 'activeSecondAmulet',
    }
  )


  return (
    <div className={classes.colthPadding}>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing} onClick={handleClickAmulet} onDoubleClick={removeAmulet}>
          {renderImgHelper(imgAmulet, classes.imgDescriptionAmulet)}
        </div>
      </div>
      <div className={classes.armorBeltHelmPading} >
        <div className={classes.helmet} onClick={handleClickHelmet} onDoubleClick={removeHelmet}>
          {renderImgHelper(imgHelmet, classes.imgDescriptionHelmet)}
        </div>
      </div>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing} onClick={handleClickSecondAmulet} onDoubleClick={removeSecondAmulet}>
          {renderImgHelper(imgSecondAmulet, classes.imgDescriptionAmulet)}
        </div>
      </div>
    </div>
  )
}

HelmetAmulet.propTypes = {
  classItem: PropTypes.string,
  activeHelmet: PropTypes.bool,
  activeAmulet: PropTypes.bool,
  activeSecondAmulet: PropTypes.bool,
  imgHelmet: PropTypes.string,
  imgAmulet: PropTypes.string,
  imgSecondAmulet: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  helmetInfo: PropTypes.object.isRequired,
  amuletInfo: PropTypes.object.isRequired,
  secondAmuletInfo: PropTypes.object.isRequired,
  helmetRequirements: PropTypes.object.isRequired,
  amuletRequirements: PropTypes.object.isRequired,
  secondAmuletRequirements: PropTypes.object.isRequired,
  selectedId: PropTypes.string,
  amuletId: PropTypes.string,
  secondAmuletId: PropTypes.string,
  getViewDescription: PropTypes.func.isRequired,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeHelmet: store.lootAndDescriptionReducer.activeHelmet,
    activeAmulet: store.lootAndDescriptionReducer.activeAmulet,
    activeSecondAmulet: store.lootAndDescriptionReducer.activeSecondAmulet,
    imgHelmet: store.bonusReducer.helmetBonus.info.img,
    imgAmulet: store.bonusReducer.amuletBonus.info.img,
    imgSecondAmulet: store.bonusReducer.secondAmuletBonus.info.img,
    id: store.lootAndDescriptionReducer.id,
    info: store.lootAndDescriptionReducer.description,
    requirements: store.lootAndDescriptionReducer.requirements,
    helmetInfo: store.bonusReducer.helmetBonus.info,
    amuletInfo: store.bonusReducer.amuletBonus.info,
    secondAmuletInfo: store.bonusReducer.secondAmuletBonus.info,
    helmetRequirements: store.bonusReducer.helmetBonus.requirements,
    amuletRequirements: store.bonusReducer.amuletBonus.requirements,
    secondAmuletRequirements: store.bonusReducer.secondAmuletBonus.requirements,
    selectedId: store.lootAndDescriptionReducer.description.id,
    amuletId: store.bonusReducer.amuletBonus.info.id,
    secondAmuletId: store.bonusReducer.secondAmuletBonus.info.id,
  }),
  { getViewDescription })(HelmetAmulet)