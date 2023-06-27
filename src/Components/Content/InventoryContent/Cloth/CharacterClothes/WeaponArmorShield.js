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
    padding: '3px'
  },
  weaponAndShield: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '150px',
    width: '80px'
  },
  armorBeltHelmPading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px'
  },
  armor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '120px',
    width: '80px'
  },
  imgDescriptionArmor: {
    display: 'flex',
    maxHeight: '120px',
    maxWidth: '80px'
  },
  imgDescriptionWeaponAndShield: {
    display: 'flex',
    maxHeight: '150px',
    maxWidth: '80px'
  },
})

const nullArmor = {
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
    typeArmor: null
  }
}

const nullWeapon = {
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
    startPhysicalDamage: null,
    finalPhysicalDamage: null,
    oneHanded: false,
    twoHanded: false
  },
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeWeapon: null
  }
}

const WeaponArmorShield = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    classItem,
    activeArmor,
    activeWeapon,
    id,
    imgArmor,
    imgWeapon,
    info,
    requirements,
    armorInfo,
    weaponInfo,
    armorRequirements,
    weaponRequirements,
    // oneHanded,
    twoHanded,
    twoHandedBonus,
    // oneHandedBonus,
    activeSecondWeapon,
    imgSecondWeapon,
    secondWeaponInfo,
    secondWeaponRequirements,
    // secondBonusCheck
  } = props

  const handleClickArmor = () => {
    addItemToColthHelper(
      {
        dispatch,
        itemInfo: armorInfo,
        itemRequirements: armorRequirements,
        stingItem: 'armor',
        activeItem: activeArmor,
        strignActiveitem: 'activeArmor',
        bonus: { info: info, requirements: requirements },
        stringBonus: 'armorBonus',
        arrayType: 'armor',
        classItems: classItem,
        id
      }
    )
  }

  const removeArmor = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeArmor,
      stingItem: 'armor',
      stringBonus: 'armorBonus',
      nullValue: nullArmor,
      arrayType: 'armor',
      updateItem: itemUpdateHelper(armorInfo, armorRequirements),
      strignActiveitem: 'activeArmor',
      classItems: classItem
    }
  )

  const removeWeapon = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeWeapon,
      stingItem: 'weapon',
      stringBonus: 'weaponBonus',
      nullValue: nullWeapon,
      arrayType: 'weapon',
      updateItem: itemUpdateHelper(weaponInfo, weaponRequirements),
      strignActiveitem: 'activeWeapon',
      classItems: classItem
    }
  )

  const handleClickSecondWeapon = () => {
    if (!twoHanded) {
      if (twoHandedBonus === false) {
        addItemToColthHelper(
          {
            dispatch,
            itemInfo: secondWeaponInfo,
            itemRequirements: secondWeaponRequirements,
            stingItem: 'weapon',
            activeItem: activeSecondWeapon,
            strignActiveitem: 'activeSecondWeapon',
            bonus: { info: info, requirements: requirements },
            stringBonus: 'secondWeaponBonus',
            arrayType: 'weapon',
            classItems: classItem,
            id
          }
        )
      }
    }
  }

  const removeSecondWeapon = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeSecondWeapon,
      stingItem: 'weapon',
      stringBonus: 'secondWeaponBonus',
      nullValue: nullWeapon,
      arrayType: 'weapon',
      updateItem: itemUpdateHelper(secondWeaponInfo, secondWeaponRequirements),
      strignActiveitem: 'activeSecondWeapon',
      classItems: classItem
    }
  )

  const handleClickWeapon = () => {
    addItemToColthHelper(
      {
        dispatch,
        itemInfo: weaponInfo,
        itemRequirements: weaponRequirements,
        stingItem: 'weapon',
        activeItem: activeWeapon,
        strignActiveitem: 'activeWeapon',
        bonus: { info: info, requirements: requirements },
        stringBonus: 'weaponBonus',
        arrayType: 'weapon',
        classItems: classItem,
        id
      }
    )
  }

  return (
    <div className={classes.colthPadding}>
      <div className={classes.weaponAndShield} onClick={handleClickWeapon} onDoubleClick={removeWeapon}>
        {renderImgHelper(imgWeapon, classes.imgDescriptionWeaponAndShield)}
      </div>
      <div className={classes.armorBeltHelmPading}>
        <div className={classes.armor} onClick={handleClickArmor} onDoubleClick={removeArmor}>
          {renderImgHelper(imgArmor, classes.imgDescriptionArmor)}
        </div>
      </div>
      <div className={classes.weaponAndShield} onClick={handleClickSecondWeapon} onDoubleClick={removeSecondWeapon}>
        {renderImgHelper(imgSecondWeapon, classes.imgDescriptionWeaponAndShield)}
      </div>
    </div>
  )
}

WeaponArmorShield.propTypes = {
  classItem: PropTypes.string,
  activeArmor: PropTypes.bool,
  imgArmor: PropTypes.string,
  id: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  armorInfo: PropTypes.object.isRequired,
  armorRequirements: PropTypes.object.isRequired,
  weaponInfo: PropTypes.object.isRequired,
  weaponRequirements: PropTypes.object.isRequired
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    oneHanded: store.lootAndDescriptionReducer.description.oneHanded,
    secondBonusCheck: store.bonusReducer.secondWeaponBonus.info.oneHanded,
    twoHanded: store.lootAndDescriptionReducer.description.twoHanded,
    twoHandedBonus: store.bonusReducer.weaponBonus.info.twoHanded,
    activeArmor: store.lootAndDescriptionReducer.activeArmor,
    activeWeapon: store.lootAndDescriptionReducer.activeWeapon,
    activeSecondWeapon: store.lootAndDescriptionReducer.activeSecondWeapon,
    id: store.lootAndDescriptionReducer.id,
    imgArmor: store.bonusReducer.armorBonus.info.img,
    imgWeapon: store.bonusReducer.weaponBonus.info.img,
    imgSecondWeapon: store.bonusReducer.secondWeaponBonus.info.img,
    info: store.lootAndDescriptionReducer.description,
    requirements: store.lootAndDescriptionReducer.requirements,
    armorInfo: store.bonusReducer.armorBonus.info,
    weaponInfo: store.bonusReducer.weaponBonus.info,
    secondWeaponInfo: store.bonusReducer.secondWeaponBonus.info,
    armorRequirements: store.bonusReducer.armorBonus.requirements,
    weaponRequirements: store.bonusReducer.weaponBonus.requirements,
    secondWeaponRequirements: store.bonusReducer.secondWeaponBonus.requirements,
  }),
  {})(WeaponArmorShield)