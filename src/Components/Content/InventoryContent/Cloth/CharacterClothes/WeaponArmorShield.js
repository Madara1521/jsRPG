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
    padding: '3px'
  },
  weaponAndShield: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px ridge #a3a3a3',
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
    border: '3px ridge #a3a3a3',
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
  imgDescriptionWeaponAndShieldNull: {
    display: 'flex',
    maxHeight: '150px',
    maxWidth: '80px',
    opacity: '0.5'
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

const nullShield = {
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
    blockingBonus: null,
    oneHanded: false,
    twoHanded: false
  },
  requirements: {
    requiredLevel: null,
    requiredStrength: null,
    requiredDexterity: null,
    typeShield: null
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
    weaponBonusId,
    imgArmor,
    imgWeapon,
    info,
    requirements,
    armorInfo,
    weaponInfo,
    armorRequirements,
    weaponRequirements,
    selectedId,
    twoHanded,
    twoHandedBonus,
    activeSecondWeapon,
    imgSecondWeapon,
    secondWeaponInfo,
    secondWeaponRequirements,
    secondWeaponBonusCheck,
    secondWeaponBonusId,
    getViewDescription,
    activeShield,
    shieldInfo,
    shieldRequirements,
    imgShield,
    shieldBonusCheck,
    shieldBonusId
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
        bonus: { info, requirements },
        stringBonus: 'armorBonus',
        arrayType: 'armor',
        classItem,
        id
      }
    )
  }

  const removeArmor = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeArmor,
      stringBonus: 'armorBonus',
      nullValue: nullArmor,
      arrayType: 'armor',
      updateItem: itemUpdateHelper(armorInfo, armorRequirements),
      strignActiveitem: 'activeArmor',
    }
  )

  const handleClickSecondWeapon = () => {
    if (selectedId === weaponBonusId || twoHandedBonus) {
      getViewDescription({}, {})
    }
    if (!twoHanded && !twoHandedBonus) {
      if (selectedId !== weaponBonusId) {
        addItemToColthHelper(
          {
            dispatch,
            itemInfo: secondWeaponInfo,
            itemRequirements: secondWeaponRequirements,
            stingItem: 'weapon',
            activeItem: activeSecondWeapon,
            strignActiveitem: 'activeSecondWeapon',
            bonus: { info, requirements },
            stringBonus: 'secondWeaponBonus',
            arrayType: 'weapon',
            classItem,
            id
          }
        )
      }
    }
  }

  const handleClickShield = () => {
    if (selectedId === weaponBonusId || twoHandedBonus) {
      getViewDescription({}, {})
    }
    if (!twoHanded && !twoHandedBonus) {
      if (selectedId !== weaponBonusId) {
        addItemToColthHelper(
          {
            dispatch,
            itemInfo: shieldInfo,
            itemRequirements: shieldRequirements,
            stingItem: 'shield',
            activeItem: activeShield,
            strignActiveitem: 'activeShield',
            bonus: { info, requirements },
            stringBonus: 'shieldBonus',
            arrayType: 'shield',
            classItem,
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
      stringBonus: 'secondWeaponBonus',
      nullValue: nullWeapon,
      arrayType: 'weapon',
      updateItem: itemUpdateHelper(secondWeaponInfo, secondWeaponRequirements),
      strignActiveitem: 'activeSecondWeapon',
    }
  )

  const removeShield = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeShield,
      stringBonus: 'shieldBonus',
      nullValue: nullShield,
      arrayType: 'shield',
      updateItem: itemUpdateHelper(shieldInfo, shieldRequirements),
      strignActiveitem: 'activeShield',
    }

  )

  const secondHandleClick = () => {
    if (!activeShield) {
      handleClickSecondWeapon()
    }
    if (!activeSecondWeapon) {
      handleClickShield()
    }
  }

  const secondRemove = () => {
    if (activeSecondWeapon) {
      removeSecondWeapon()
    }
    if (activeShield) {
      removeShield()
    }
  }

  const handleClickWeapon = () => {
    if (twoHanded && !activeWeapon) {
      secondRemove()
    }
    if (selectedId === (secondWeaponBonusId || shieldBonusId)) {
      getViewDescription({}, {})
    }
    if ((secondWeaponBonusId || shieldBonusId) !== selectedId) {
      addItemToColthHelper(
        {
          dispatch,
          itemInfo: weaponInfo,
          itemRequirements: weaponRequirements,
          stingItem: 'weapon',
          activeItem: activeWeapon,
          strignActiveitem: 'activeWeapon',
          bonus: { info, requirements },
          stringBonus: 'weaponBonus',
          arrayType: 'weapon',
          classItem,
          id
        }
      )
    }
  }

  const removeWeapon = () => removeItemHelper(
    {
      dispatch,
      activeItem: activeWeapon,
      stringBonus: 'weaponBonus',
      nullValue: nullWeapon,
      arrayType: 'weapon',
      updateItem: itemUpdateHelper(weaponInfo, weaponRequirements),
      strignActiveitem: 'activeWeapon',
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
      <div className={classes.weaponAndShield} onClick={secondHandleClick} onDoubleClick={secondRemove}>
        {renderImgHelper(imgSecondWeapon, classes.imgDescriptionWeaponAndShield)}
        {renderImgHelper(imgShield, classes.imgDescriptionWeaponAndShield)}
        {!secondWeaponBonusCheck && !shieldBonusCheck ? (
          renderImgHelper(imgWeapon, classes.imgDescriptionWeaponAndShieldNull)
        ) : null}
      </div>
    </div>
  )
}

WeaponArmorShield.propTypes = {
  classItem: PropTypes.string,
  secondBonusCheck: PropTypes.bool,
  twoHanded: PropTypes.bool,
  twoHandedBonus: PropTypes.bool,
  activeArmor: PropTypes.bool,
  activeWeapon: PropTypes.bool,
  activeSecondWeapon: PropTypes.bool,
  id: PropTypes.string,
  selectedId: PropTypes.string,
  bonusId: PropTypes.string,
  secondBonusId: PropTypes.string,
  imgArmor: PropTypes.string,
  imgWeapon: PropTypes.string,
  imgSecondWeapon: PropTypes.string,
  info: PropTypes.object.isRequired,
  requirements: PropTypes.object.isRequired,
  armorInfo: PropTypes.object.isRequired,
  armorRequirements: PropTypes.object.isRequired,
  weaponInfo: PropTypes.object.isRequired,
  weaponRequirements: PropTypes.object.isRequired,
  secondWeaponInfo: PropTypes.object.isRequired,
  secondWeaponRequirements: PropTypes.object.isRequired
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    secondWeaponBonusCheck: store.bonusReducer.secondWeaponBonus.info.oneHanded,
    shieldBonusCheck: store.bonusReducer.shieldBonus.info.oneHanded,
    twoHanded: store.lootAndDescriptionReducer.description.twoHanded,
    twoHandedBonus: store.bonusReducer.weaponBonus.info.twoHanded,
    activeArmor: store.lootAndDescriptionReducer.activeArmor,
    activeWeapon: store.lootAndDescriptionReducer.activeWeapon,
    activeSecondWeapon: store.lootAndDescriptionReducer.activeSecondWeapon,
    activeShield: store.lootAndDescriptionReducer.activeShield,
    id: store.lootAndDescriptionReducer.id,
    selectedId: store.lootAndDescriptionReducer.description.id,
    weaponBonusId: store.bonusReducer.weaponBonus.info.id,
    secondWeaponBonusId: store.bonusReducer.secondWeaponBonus.info.id,
    shieldBonusId: store.bonusReducer.shieldBonus.info.id,
    imgArmor: store.bonusReducer.armorBonus.info.img,
    imgWeapon: store.bonusReducer.weaponBonus.info.img,
    imgSecondWeapon: store.bonusReducer.secondWeaponBonus.info.img,
    imgShield: store.bonusReducer.shieldBonus.info.img,
    info: store.lootAndDescriptionReducer.description,
    requirements: store.lootAndDescriptionReducer.requirements,
    armorInfo: store.bonusReducer.armorBonus.info,
    armorRequirements: store.bonusReducer.armorBonus.requirements,
    weaponInfo: store.bonusReducer.weaponBonus.info,
    shieldInfo: store.bonusReducer.shieldBonus.info,
    weaponRequirements: store.bonusReducer.weaponBonus.requirements,
    secondWeaponInfo: store.bonusReducer.secondWeaponBonus.info,
    secondWeaponRequirements: store.bonusReducer.secondWeaponBonus.requirements,
    shieldRequirements: store.bonusReducer.shieldBonus.requirements,
  }),
  { getViewDescription })(WeaponArmorShield)