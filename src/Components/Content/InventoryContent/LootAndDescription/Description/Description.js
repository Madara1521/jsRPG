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
    color: 'rgba(48, 97, 219) !important'
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
      height: '240px',
      width: '100%'
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
    width: '100%',
  },
  lootCellStandart: {
    background: 'linear-gradient(90deg, rgba(43,43,43,0.6811099439775911) 0%, rgba(74,74,74,1) 48%, rgba(48,48,48,0.6811099439775911) 100%)',
  },
  lootCellMagic: {
    background: 'linear-gradient(90deg, rgba(0,91,255,0.27) 0%, rgba(0,91,255,0.6558998599439776) 50%, rgba(0,91,255,0.3) 100%)',
  },
  lootCellUnique: {
    background: 'linear-gradient(90deg, rgba(99,0,165,0.53) 0%, rgba(55,0,165,0.8407738095238095) 50%, rgba(165,0,145,0.53) 100%)',
  },
  lootCellKit: {
    background: 'linear-gradient(90deg, rgba(0,165,40,0.53) 0%, rgba(0,165,40,1) 50%, rgba(0,165,40,0.53) 100%)',
  },
  lootCellLegendary: {
    background: 'linear-gradient(90deg, rgba(255,115,0,0.5326505602240896) 0%, rgba(255,115,0,1) 50%, rgba(255,115,0,0.6166841736694677) 100%)',
  }
}))

const Description = (props) => {
  const classes = useStyles()
  const {
    description,
    requirements,
    id
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
        <div className={classNames(id && classes.lootCell, lootCellColor)}>
          {description.lootName}
        </div>
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
    requirements: store.lootAndDescriptionReducer.requirements,
    id: store.lootAndDescriptionReducer.description.id
  }),
  {}
)(Description)
