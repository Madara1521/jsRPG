import React, { useEffect } from "react"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"
import { connect } from "react-redux"
import { setPushItem } from "../../../Redux/actions"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  stackColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '37px'
  },
  goldComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '25px'
  },
})

const InvertoryContent = (props) => {
  const classes = useStyles()
  const { 
    gold, 
    helmetGlovesBootsBelt,
    setPushItem,
    armors,
    weapons,
    shields,
    ringsAmulets,
    others } = props

  useEffect(() => {
    //imitation loot
    setPushItem('helmetGlovesBootsBelt', helmetGlovesBootsBelt)
    setPushItem('armor', armors)
    setPushItem('weapon', weapons)
    setPushItem('shield', shields)
    setPushItem('ringsAmulet', ringsAmulets)
    setPushItem('other', others)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helmetGlovesBootsBelt, armors, weapons, shields, ringsAmulets, others])


  return (
    <div className={classes.content} >
      <div className={classes.stackColumn}>
        <div className={classes.titleComp}>
          <h1>Invertoty</h1>
        </div>
        <Cloth />
        <Talismans />
        <LootAndDescription />
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
    armors: store.lootOptionsReducer.armor,
    weapons: store.lootOptionsReducer.weapon,
    shields: store.lootOptionsReducer.shield,
    ringsAmulets: store.lootOptionsReducer.ringsAmulet,
    others: store.lootOptionsReducer.other,
  }
}, { setPushItem })(InvertoryContent)