import React from "react"
import { makeStyles } from "@mui/styles"
import { connect } from "react-redux"
import { setHelmetBonus } from "../../../../../Redux/actions"

const useStyles = makeStyles({
  colthPadding: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3px'
  },
  endAmulet: {
    display: 'flex',
    alignItems: 'end'
  },
  amuletAndRing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '25px',
    width: '25px'
  },
  armorBeltHelmPading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px'
  },
  helmet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'black 2px solid',
    height: '70px',
    width: '70px'
  },
  imgDescription: {
    display: 'flex',
    maxHeight: '75px',
    maxWidth: '75px'
  }
})



const HemletAmulet = (props) => {
  const classes = useStyles()
  const {
    // id,
    classItem,
    imgHelmet,
    setHelmetBonus,
    helmetBonus } = props

  const helmetClick = () => {
    if (classItem === 2) {
      setHelmetBonus(helmetBonus)
    }
  }

  const renderImg = (img) => {
    return img ? <img className={classes.imgDescription} src={img} alt='img' /> : null
  }

  return (
    <div className={classes.colthPadding}>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
      <div className={classes.armorBeltHelmPading} >
        <div className={classes.helmet} onClick={helmetClick}>
          {renderImg(imgHelmet)}
        </div>
      </div>
      <div className={classes.endAmulet}>
        <div className={classes.amuletAndRing}>

        </div>
      </div>
    </div>
  )
}

export default connect(
  (store) => ({
    // id: store.lootAndDescriptionReducer.description.id,
    classItem: store.lootAndDescriptionReducer.description.classItem,
    imgHelmet: store.bonusReducer.helmetBonus.img,
    helmetBonus: store.lootAndDescriptionReducer.description,
    helmetBonusRed: store.bonusReducer.helmetBonus
  }),
  {setHelmetBonus}
)(HemletAmulet)