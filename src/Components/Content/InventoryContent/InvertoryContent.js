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
    color: 'white',
    fontSize: '20px',
    '-webkit-text-stroke': '0.3px black',
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
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '2px',
    color: 'rgb(179, 30, 0)',
    '-webkit-text-stroke': '0.5px black',
    fontSize: '17px',
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
  const { gold } = props

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
  }
}, {})(InvertoryContent)