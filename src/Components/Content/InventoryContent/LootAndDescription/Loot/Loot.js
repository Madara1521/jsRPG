import React from "react"
import { useStyles } from "../../../../Styles"
import LootComp from "../LootComp"
import helm from './helm.png'
import armor from './armor.png'
import weapon from './weapon.png'
import shield from './shield.png'
import ring from './ring.png'
import book from './book.png'
import { setViewItem } from "../../../../../Redux/actions"
import { connect } from "react-redux"


const Loot = (props) => {
  const classes = useStyles()
  const {setViewItem} = props

  const viewItems = () => {
    console.log('items')
    // setViewItem()
  }

  return (
    <div className={classes.loot}>
      <div className={classes.twoTitle}>
        <div className={classes.typesOfLoot} onClick={()=> viewItems()}><img src={helm} alt='helm' /></div>
        <div className={classes.typesOfLoot}><img src={armor} alt='armor' /></div>
        <div className={classes.typesOfLoot}><img src={weapon} alt='weapon' /></div>
        <div className={classes.typesOfLoot}><img src={shield} alt='shield' /></div>
        <div className={classes.typesOfLoot}><img src={ring} alt='ring' /></div>
        <div className={classes.typesOfLoot}><img src={book} alt='book' /></div>
      </div>
      <div className={classes.lootDescriptionComp}>
        <LootComp />
      </div>
    </div>
  )
}

export default connect(null,{setViewItem})(Loot)