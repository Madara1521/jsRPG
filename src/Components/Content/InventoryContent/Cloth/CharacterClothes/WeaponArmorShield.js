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

const nullWeapon = {
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
  oneHanded: null,
  twoHanded: null
}

const WeaponArmorShield = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    classItem,
    activeArmor,
    activeWeapon,
    imgArmor,
    imgWeapon,
    bonus,
    armor,
    weapon,
    id } = props

  const handleClickArmor = () => addItemToColthHelper(
    {
      dispatch,
      item: armor,
      stingItem: 'armor',
      activeItem: activeArmor,
      strignActiveitem: 'activeArmor',
      bonus: bonus,
      stringBonus: 'armorBonus',
      arrayType: 'armor',
      classItems: classItem,
      id
    }
  )

  const removeArmor = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeArmor,
      stingItem: 'armor',
      stringBonus: 'armorBonus',
      nullValue: nullArmor,
      arrayType: 'armor',
      updateItem: itemUpdateHelper(armor),
      strignActiveitem: 'activeArmor',
      classItems: classItem
    }
  )

  const handleClickWeapon = () => addItemToColthHelper(
    {
      dispatch,
      item: weapon,
      stingItem: 'weapon',
      activeItem: activeWeapon,
      strignActiveitem: 'activeWeapon',
      bonus: bonus,
      stringBonus: 'weaponBonus',
      arrayType: 'weapon',
      classItems: classItem,
      id
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
      updateItem: itemUpdateHelper(weapon),
      strignActiveitem: 'activeWeapon',
      classItems: classItem
    }
  )

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
      <div className={classes.weaponAndShield}>
        {renderImgHelper(imgWeapon, classes.imgDescriptionWeaponAndShield)}
      </div>
    </div>
  )
}

WeaponArmorShield.propTypes = {
  classItem: PropTypes.string,
  activeArmor: PropTypes.bool,
  imgArmor: PropTypes.string,
  bonus: PropTypes.object.isRequired,
  armor: PropTypes.object.isRequired,
  id: PropTypes.string,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeArmor: store.lootAndDescriptionReducer.activeArmor,
    activeWeapon: store.lootAndDescriptionReducer.activeWeapon,
    imgArmor: store.bonusReducer.armorBonus.img,
    imgWeapon: store.bonusReducer.weaponBonus.img,
    bonus: store.lootAndDescriptionReducer.description,
    armor: store.bonusReducer.armorBonus,
    weapon: store.bonusReducer.weaponBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  {})(WeaponArmorShield)