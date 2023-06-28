import {
  getViewDescription,
  setActiveItem,
  setDeleteItem,
  setItemBonus,
  setPushCloth
} from "../Redux/actions"

export const itemUpdateHelper = (itemInfo, itemRequirement) => {
  return {
    requirements: itemRequirement,
    info: itemInfo
  }
}

export const renderImgHelper = (img, classDiv) => {
  return img ? <img className={classDiv} src={img} alt='img' /> : null
}

export const addItemToColthHelper = (props) => {
  const {
    dispatch,
    itemInfo,
    stingItem,
    activeItem,
    strignActiveitem,
    bonus,
    stringBonus,
    arrayType,
    classItem,
    id,
    itemRequirements } = props

  dispatch(getViewDescription(itemInfo, itemRequirements))
  if (!activeItem && classItem === stingItem) {
    dispatch(setItemBonus(stringBonus, bonus))
    dispatch(setDeleteItem(arrayType, id))
    dispatch(setActiveItem(strignActiveitem, true))
  }
}

export const removeItemHelper = (props) => {
  const {
    dispatch,
    activeItem,
    stringBonus, nullValue,
    arrayType, updateItem,
    strignActiveitem,
  } = props
  dispatch(getViewDescription({},{}))
  if (activeItem) {
    dispatch(setItemBonus(stringBonus, nullValue))
    dispatch(setPushCloth(arrayType, updateItem))
    dispatch(setActiveItem(strignActiveitem, false))
  }
}