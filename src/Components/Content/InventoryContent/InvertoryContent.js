import React from "react"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"
import { connect } from "react-redux"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  content: {
    display: 'flex',
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
  stackColumn: {
    display: 'flex',
    flexDirection: 'column'
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
  const { gold } = props

  return (
    <div className={classes.content} >
      <div className={classes.stackColumn}>
        <div>
          <h1>Invertory</h1>
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
  }
}, {})(InvertoryContent)