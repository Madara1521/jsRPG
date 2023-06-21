import React from "react"
import { makeStyles } from "@mui/styles"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  glovesAndBoots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '80px',
    width: '80px',
  },
  paddingGloves: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px'
  },
})

const GlovesBoots = () => {
  const classes = useStyles()

  return (
    <div className={classes.colthPadding}>
      <div className={classes.glovesAndBoots}>

      </div>
      <div className={classes.paddingGloves} />
      <div className={classes.glovesAndBoots}>

      </div>
    </div>
  )
}

GlovesBoots.propTypes = {
  classItem: PropTypes.string,
  helmetGlovesBootsBelt: PropTypes.array.isRequired,
  activeGloves: PropTypes.bool,
  activeBoots: PropTypes.bool,
}

export default connect(
  (store) => ({
    classItem: store.lootAndDescriptionReducer.description.classItem,
    activeGloves: store.lootAndDescriptionReducer.activeGloves,
    activeBoots: store.lootAndDescriptionReducer.activeBoots,
    helmetGlovesBootsBelt: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    imgGloves: store.bonusReducer.glovesBonus.img,
    imgBoots: store.bonusReducer.bootsBonus.img,
    glovesBonus: store.lootAndDescriptionReducer.description,
    bootsBonus: store.lootAndDescriptionReducer.description,
    gloves: store.bonusReducer.glovesBonus,
    boots: store.bonusReducer.bootsBonus,
    id: store.lootAndDescriptionReducer.id,
  }),
  // {
  // setActiveItem,
  //   setItemBonus,
  //   getViewDescription,
  //   setDeleteItem,
  //   setPushCloth
  // }
)(GlovesBoots)

