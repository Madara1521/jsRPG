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
    classItems,
    id,
    itemRequirements } = props

  dispatch(getViewDescription(itemInfo, itemRequirements))
  if (!activeItem && classItems === stingItem) {
    dispatch(setItemBonus(stringBonus, bonus))
    dispatch(setDeleteItem(arrayType, id))
    dispatch(setActiveItem(strignActiveitem, true))
  }
}

export const removeItemHelper = (props) => {
  const {
    dispatch,
    activeItem, stingItem,
    stringBonus, nullValue,
    arrayType, updateItem,
    strignActiveitem, classItems,
  } = props

  dispatch(getViewDescription({},{}))
  if (activeItem && classItems === stingItem) {
    dispatch(setItemBonus(stringBonus, nullValue))
    dispatch(setPushCloth(arrayType, updateItem))
    dispatch(setActiveItem(strignActiveitem, false))
  }
}