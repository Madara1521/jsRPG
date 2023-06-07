import React from "react"
import { useStyles } from "../../../../Styles"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const Description = (props) => {
  const classes = useStyles()
  const {
    description,
    color } = props

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

  const renderName = (colorLoot) => {
    return colorLoot ? <div className={classes[colorLoot]}>{description.lootName}</div> : null
  }

  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.DescriptionComp}>
        {renderName(color)}
        {renderImg(description.img)}
        <div className={classes.lootBonus}>
          {renderDamage('Physical damage', description.startPhysicalDamage, description.finalPhycicalDamage)}
          {renderRequired("Required level", description.requiredLevel)}
          {renderRequired("Required strength", description.requiredStrength)}
          {renderRequired("Required dexterity", description.requiredDexterity)}
          {renderRequired("Durability", description.durability)}
          {renderRequired("Base weapon speed", description.baseWeaponSpeed)}
          {renderDefense("Defense", description.defense)}
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
  color: PropTypes.string.isRequired,
}

export default connect(
  (store) => ({
    description: store.lootAndDescriptionReducer.description,
    color: store.lootAndDescriptionReducer.description.color
  }),
  {}
)(Description)
