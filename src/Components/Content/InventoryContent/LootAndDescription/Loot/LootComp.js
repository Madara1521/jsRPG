import React from "react"
import { getViewDescription } from "../../../../../Redux/actions"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"
import classNames from "classnames"


const useStyles = makeStyles({
  lootCell: {
    display: 'flex',
    border: '1px solid #edebeb',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '25px',
  },
  lootCellStandart: {
    background: 'linear-gradient(90deg, rgba(43,43,43,0.6811099439775911) 0%, rgba(74,74,74,1) 48%, rgba(48,48,48,0.6811099439775911) 100%)',
  },
  lootCellActive: {
    background: 'linear-gradient(90deg, rgba(255,180,0,0.4514180672268907) 0%, rgba(255,180,0,1) 50%, rgba(255,180,0,0.45) 100%) !important',
    border: 'none',
    color: 'rgba(214, 0, 0) !important'
  },
  lootCellMagic: {
    background: 'linear-gradient(90deg, rgba(0,91,255,0.27) 0%, rgba(0,91,255,0.6558998599439776) 50%, rgba(0,91,255,0.3) 100%)',
  },
  lootCellKit: {
    background: 'linear-gradient(90deg, rgba(0,165,40,0.53) 0%, rgba(0,165,40,1) 50%, rgba(0,165,40,0.53) 100%)',
  },
  lootCellLegendary: {
    background: 'linear-gradient(90deg, rgba(255,115,0,0.5326505602240896) 0%, rgba(255,115,0,1) 50%, rgba(255,115,0,0.6166841736694677) 100%)',
  },
})

export const rarityColorHelper = (classes, rarity) => {
  switch (rarity) {
    case 1:
      return classes.lootCellMagic
    case 2:
      return classes.lootCellKit
    case 3:
      return classes.lootCellLegendary
    default:
      return classes.lootCellStandart
  }
}

const LootComp = (props) => {
  const classes = useStyles()

  const {
    lootName,
    info,
    getViewDescription,
    id,
    rarity,
    setActiveItem,
    isActiveItem,
    requirements
  } = props



  const handleClick = () => {
    if (isActiveItem) {
      getViewDescription({}, {})
      return setActiveItem(null)
    }
    getViewDescription(info, requirements, isActiveItem, id)
    return setActiveItem(id)
  }

  const lootCellColor = rarityColorHelper(classes, rarity)

  return (
    <div
      onClick={handleClick}
      className={classNames(classes.lootCell, lootCellColor, isActiveItem && classes.lootCellActive)}
    >
      {lootName}
    </div>
  )
}



LootComp.propTypes = {
  lootName: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  getViewDescription: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  isActiveItem: PropTypes.bool,
  id: PropTypes.string.isRequired,
  rarity: PropTypes.number.isRequired,
}

export default connect(null, { getViewDescription })(LootComp)