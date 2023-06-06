import React from "react"
import { useStyles } from "../../../../Styles"
import { connect } from "react-redux"


const DescriptionTest = (props) => {
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
          <div>physical damage: {description.startPhysicalDamage}-{description.finalPhycicalDamage}</div>
          <div>strength: {description.strength}</div>
          <div>dexterity: {description.dexterity}</div>
          <div>vitality: {description.vitality}</div>
          <div>energy: {description.energy}</div>
        </div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    description: store.lootAndDescriptionReducer.description
  }
}, {})(DescriptionTest)