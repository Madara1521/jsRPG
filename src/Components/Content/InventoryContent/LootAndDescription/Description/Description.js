import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"
import classNames from "classnames"
import { rarityColorHelper } from "../Loot/LootComp"

const useStyles = makeStyles({
  twoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '304px',
    height: '37px'
  },
  magicLetters: {
    color: 'blue'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '100px',
    maxWidth: '100px'
  },
  description: {
    display: 'flex',
    border: 'black 1px solid',
    flexDirection: 'column',
  },
  descriptionComp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: '243px',
    overflowY: 'scroll',
    fontSize: '130%',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    }
  },
  lootBonus: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
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



const Description = (props) => {
  const classes = useStyles()
  const {
    description
  } = props

  const lootCellColor = rarityColorHelper(classes, description.rarity)

  const renderStat = (name, value) => {
    return value ? <div className={classes.magicLetters}> +{value} {name}</div> : null
  }

  const renderDefense = (name, value) => {
    return value ? <div>{name}: {value}</div> : null
  }

  const renderRequired = (name, value) => {
    return value ? <div>{name}: {value}</div> : null
  }

  const renderDamage = (name, start, final) => {
    return start ? <div>{name}: {start}-{final}</div> : null
  }

  const renderImg = (img) => {
    return img ? <img className={classes.imgDescription} src={img} alt='img' /> : null
  }

  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.descriptionComp}>
        <div className={classNames(classes.lootCell && lootCellColor)}>{description.lootName}</div>
        {renderImg(description.img)}
        <div className={classes.lootBonus}>
          {renderDamage('Physical damage', description.startPhysicalDamage, description.finalPhycicalDamage)}
          {renderRequired("Required level", description.requiredLevel)}
          {renderRequired("Required strength", description.requiredStrength)}
          {renderRequired("Required dexterity", description.requiredDexterity)}
          {renderRequired("Durability", description.durability)}
          {renderRequired("Base weapon speed", description.baseWeaponSpeed)}
          {renderDefense("Defense", description.defenseBonus)}
          {renderStat("Strength", description.strength)}
          {renderStat("Dexterity", description.dexterity)}
          {renderStat("Vitality", description.vitality)}
          {renderStat("Energy", description.energy)}
        </div>
      </div>
    </div>
  )
}


Description.propTypes = {
  description: PropTypes.object.isRequired,
}

export default connect(
  (store) => ({
    description: store.lootAndDescriptionReducer.description,
  }),
  {}
)(Description)
