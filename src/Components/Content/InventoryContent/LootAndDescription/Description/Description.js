import React from "react"
import { useStyles } from "../../../../Styles"
import { connect } from "react-redux"


const Description = (props) => {
  const classes = useStyles()
  const { description } = props

  console.log(description)

  return (
    <div className={classes.description}>
      <div className={classes.twoTitle}>
        <h1>Item description</h1>
      </div>
      <div className={classes.lootDescriptionComp}>
        <div>{description.nameLoot}</div>
        <div>strength: {description.strength}</div>
        <div>dexterity: {description.dexterity}</div>
        <div>vitality: {description.vitality}</div>
        <div>energy: {description.energy}</div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    description: store.lootAndDescriptionReducer.description
  }
},{})(Description)