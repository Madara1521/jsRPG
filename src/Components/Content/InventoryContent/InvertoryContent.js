import React, { useEffect } from "react"
import { useStyles } from "../../Styles"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"
import { connect } from "react-redux"
import { setViewItem } from "../../../Redux/actions"

const InvertoryContent = (props) => {
  const classes = useStyles()
  const {gold, setViewItem, helmetGlovesBootsBelt} = props

  useEffect(() => {
    setViewItem(helmetGlovesBootsBelt)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setViewItem])


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
    gold: store.lootAndDescriptionReducer.gold,
    helmetGlovesBootsBelt: store.lootOptionsReducer.helmetGlovesBootsBelt,
  }
},{setViewItem})(InvertoryContent)