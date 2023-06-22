import {
  getViewDescription,
  setActiveItem,
  setDeleteItem,
  setItemBonus,
  setPushCloth
} from "../Redux/actions"

export const itemUpdateHelper = (item) => {
  return { info: item }
}

export const renderImgHelper = (img, classDiv) => {
  return img ? <img className={classDiv} src={img} alt='img' /> : null
}

export const addItemToColthHelper = (props) => {
  const {
    dispatch,
    item,
    stingItem,
    activeItem,
    strignActiveitem,
    bonus,
    stringBonus,
    arrayType,
    classItems,
    id } = props

  dispatch(getViewDescription(item))
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
    strignActiveitem, classItems
  } = props

  dispatch(getViewDescription({}))
  if (activeItem && classItems === stingItem) {
    dispatch(setItemBonus(stringBonus, nullValue))
    dispatch(setPushCloth(arrayType, updateItem))
    dispatch(setActiveItem(strignActiveitem, false))
  }
}