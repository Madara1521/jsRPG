import React from "react"
import { connect } from "react-redux"
import { setPushItem } from "../../../Redux/actions"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  map: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column'
  }
}))

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
      <h1>Map</h1>
      <button onClick={inventoryLootUpdate}>click</button>
      <div className={classes.map}>

      </div>
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