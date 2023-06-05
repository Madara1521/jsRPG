import React, { useEffect } from "react"
import { useStyles } from "../../../../Styles"
import helm from './helm.png'
import armor from './armor.png'
import weapon from './weapon.png'
import shield from './shield.png'
import ring from './ring.png'
import book from './book.png'
import { pushItem, setViewItem } from "../../../../../Redux/actions"
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
    otherItems,
    pushItem,

    helmetGlovesBootsBelt,
    armors,
    weapons,
    shields,
    ringsAmulets,
    others } = props

  useEffect(() => {
    pushItem('helmetGlovesBootsBelt', helmetGlovesBootsBelt)
    pushItem('armor', armors)
    pushItem('weapon', weapons)
    pushItem('shield', shields)
    pushItem('ringsAmulet', ringsAmulets)
    pushItem('other', others)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [helmetGlovesBootsBelt, armors, weapons, shields, ringsAmulets, others])


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
        {selectedLoot.map((field, index) => {
          return (
            <LootComp
              nameLoot={field.nameLoot}
              color={field.color}
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

    helmetGlovesBootsBelt: store.lootOptionsReducer.helmetGlovesBootsBelt,
    armors: store.lootOptionsReducer.armor,
    weapons: store.lootOptionsReducer.weapon,
    shields: store.lootOptionsReducer.shield,
    ringsAmulets: store.lootOptionsReducer.ringsAmulet,
    others: store.lootOptionsReducer.other,
  }
}, { setViewItem, pushItem })(Loot)