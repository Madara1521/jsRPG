import React from "react"
import { useStyles } from "../../../../Styles"
import helm from './helm.png'
import armor from './armor.png'
import weapon from './weapon.png'
import shield from './shield.png'
import ring from './ring.png'
import book from './book.png'
import { setViewItem } from "../../../../../Redux/actions"
import { connect } from "react-redux"
import LootComp from './LootComp'


const Loot = (props) => {
  const classes = useStyles()
  const {
    setViewItem,
    selectedLoot,
    helmetGlovesBootsBeltItems,
    armorItems,
    weaponItems,
    shieldItems,
    ringsAmuletItems,
    otherItems } = props

  return (
    <div className={classes.loot}>
      <div className={classes.twoTitle}>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(helmetGlovesBootsBeltItems)}><img src={helm} alt='helm' /></div>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(armorItems)}><img src={armor} alt='armor' /></div>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(weaponItems)}><img src={weapon} alt='weapon' /></div>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(shieldItems)}><img src={shield} alt='shield' /></div>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(ringsAmuletItems)}><img src={ring} alt='ring' /></div>
        <div className={classes.typesOfLoot} onClick={() => setViewItem(otherItems)}><img src={book} alt='book' /></div>
      </div>
      <div className={classes.lootDescriptionComp}>
        {selectedLoot && selectedLoot.map((field, index) => {
          return (
            <LootComp
              nameLoot={field.nameLoot}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default connect((store, ownProps) => {
  return {
    selectedLoot: store.lootAndDescriptionReducer.selectedLoot,
    helmetGlovesBootsBeltItems: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    armorItems: store.lootAndDescriptionReducer.armor,
    weaponItems: store.lootAndDescriptionReducer.weapon,
    shieldItems: store.lootAndDescriptionReducer.shield,
    ringsAmuletItems: store.lootAndDescriptionReducer.ringsAmulet,
    otherItems: store.lootAndDescriptionReducer.other,
  }
}, { setViewItem })(Loot)