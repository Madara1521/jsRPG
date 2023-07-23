import React from "react"
import Talismans from "./Talismans/Talismans"
import Cloth from "./Cloth/Cloth"
import LootAndDescription from "./LootAndDescription/LootAndDescription"
import { connect } from "react-redux"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    [theme.breakpoints.down("sm")]: {
      height: 'calc(100vh - 62px)'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  goldComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '25px'
  },
  invertory: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  }
}))

const InvertoryContent = (props) => {
  const classes = useStyles()
  const { gold } = props

  return (
    <div className={classes.content} >
      <div className={classes.invertory}>
        <h1>Invertory</h1>
        <Cloth />
        <Talismans />
        <h1>Talismans</h1>
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