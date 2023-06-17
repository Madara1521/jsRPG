import React from "react"
import { useStyles } from "../../Styles"
import { Stack } from '@mui/material'
import { connect } from "react-redux"
import { setPushItem } from "../../../Redux/actions"

const MapContent = (props) => {
  const classes = useStyles()
  const {
    helmetGlovesBootsBelt,
    setPushItem,
    armors,
    weapons,
    shields,
    ringsAmulets,
    others } = props

  const inventoryLootUpdate = () => {
    setPushItem('helmetGlovesBootsBelt', helmetGlovesBootsBelt)
    setPushItem('armor', armors)
    setPushItem('weapon', weapons)
    setPushItem('shield', shields)
    setPushItem('ringsAmulet', ringsAmulets)
    setPushItem('other', others)

  }

  return (
    <div className={classes.content} >
      <Stack direction='column'>
        <div className={classes.titleComp}>
          <h1>Map</h1>
        </div>
        <button onClick={inventoryLootUpdate}>click</button>
      </Stack>
    </div>
  )
}

export default connect(store => {
  return {
    gold: store.lootAndDescriptionReducer.gold,
    helmetGlovesBootsBelt: store.lootOptionsReducer.helmetGlovesBootsBelt,
    armors: store.lootOptionsReducer.armor,
    weapons: store.lootOptionsReducer.weapon,
    shields: store.lootOptionsReducer.shield,
    ringsAmulets: store.lootOptionsReducer.ringsAmulet,
    others: store.lootOptionsReducer.other,
  }
}, { setPushItem })(MapContent)