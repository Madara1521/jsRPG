import React from "react"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"
import classNames from "classnames"
import { rarityColorHelper } from "../Loot/LootComp"
import { renderImgHelper } from "../../../../../helpers/helperCloth"


const useStyles = makeStyles((theme) => ({
  description: {
    display: 'flex',
    flex: 1,
    border: '3px ridge #a3a3a3',
    flexDirection: 'column',
    backdropFilter: 'blur(3px)',
    [theme.breakpoints.down("sm")]: {
      alignItems: 'center',
    }
  },
  twoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '296px',
    height: '37px',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    }
  },
  magicLetters: {
    color: 'blue !important'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '180px',
    maxWidth: '180px'
  },
  descriptionComp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2px',
    maxHeight: '210px',
    overflowY: 'scroll',
    fontSize: '130%',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    [theme.breakpoints.down("sm")]: {
      height: '240px'
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
}))



const Description = (props) => {
  const classes = useStyles()
  const {
    description,
    requirements
  } = props


  const lootCellColor = rarityColorHelper(classes, description.rarity)

  const renderStat = (name, value) => {
    return value ? <div className={classes.magicLetters}> +{value} {name}</div> : null
  }

  const renderIndicators = (name, value) => {
    return value ? <div>{name}: {value}</div> : null
  }

  const renderRequired = (name, value) => {
    return value ? <div>{name}: {value}</div> : null
  }

  const renderDamage = (name, start, final) => {
    return start ? <div>{name}: {start}-{final}</div> : null
  }



  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.descriptionComp}>
        <div className={classNames(classes.lootCell && lootCellColor)}>{description.lootName}</div>
        {renderImgHelper(description.img, classes.imgDescription)}
        <div className={classes.lootBonus}>
          {renderDamage('Physical damage', description.startPhysicalDamage, description.finalPhysicalDamage)}
          {renderRequired("Required level", requirements.requiredLevel)}
          {renderRequired("Required strength", requirements.requiredStrength)}
          {renderRequired("Required dexterity", requirements.requiredDexterity)}
          {renderIndicators("Durability", description.durability)}
          {renderIndicators("Base weapon speed", description.baseWeaponSpeed)}
          {renderIndicators("Defense", description.defenseBonus)}
          {renderStat("Strength", description.strength)}
          {renderStat("Dexterity", description.dexterity)}
          {renderStat("Vitality", description.vitality)}
          {renderStat("Energy", description.energy)}
          {renderStat("Attack rating bonus", description.attackRatingBonus)}
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
    requirements: store.lootAndDescriptionReducer.requirements
  }),
  {}
)(Description)
