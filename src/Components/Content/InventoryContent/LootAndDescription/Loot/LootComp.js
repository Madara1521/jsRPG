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
    background: 'rgba(182, 200, 209, 0.7)',
  },
  lootCellActive: {
    background: 'rgba(65, 35, 92, 0.7) !important',
  },
  lootCellMagic: {
    background: 'rgba(10, 32, 199, 0.7)',
  },
  lootCellKit: {
    background: 'rgba(17, 184, 61, 0.7)',
  },
  lootCellLegendary: {
    background: 'rgba(235, 106, 7, 0.7)',
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
    isActiveItem } = props


  const handleClick = () => {
    if (isActiveItem) {
      getViewDescription({})
      return setActiveItem(null)
    }
    getViewDescription(info, isActiveItem)
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