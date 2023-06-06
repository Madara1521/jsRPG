import React from "react"
import { useStyles } from "../../../../Styles"
import { connect } from "react-redux"


const Description = (props) => {
  const classes = useStyles()
  const { description } = props

  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.DescriptionComp}>
        <div className={classes.nameLoot}>{description.nameLoot}</div>
        <div className={classes.lootBonus}>
          {description.startPhysicalDamage && description.finalPhycicalDamage ? (
            <div>physical damage: {description.startPhysicalDamage}-{description.finalPhycicalDamage}</div>
          ) : null}
          {description.strength ? (
            <div>strength: {description.strength}</div>
          ) : null}
          {description.dexterity ? (
            <div>dexterity: {description.dexterity}</div>
          ) : null}
          {description.vitality ? (
            <div>vitality: {description.vitality}</div>
          ) : null}
          {description.energy ? (
            <div>energy: {description.energy}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    description: store.lootAndDescriptionReducer.description
  }
}, {})(Description)