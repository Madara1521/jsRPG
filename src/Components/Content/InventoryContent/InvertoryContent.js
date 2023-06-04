import React from "react"
import { useStyles } from "../../Styles"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"
import { connect } from "react-redux"

const InvertoryContent = (props) => {
  const classes = useStyles()
  const {gold} = props

  return (
    <div className={classes.content} >
      <div className={classes.stackColumn}>
        <div className={classes.titleComp}>
          <h1>Invertoty</h1>
        </div>
        <Cloth />
        <Talismans />
        <LootAndDescription/>
        <div className={classes.goldComp}>
          gold : {gold}
        </div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    gold: store.lootAndDescriptionReducer.gold
  }
},null)(InvertoryContent)