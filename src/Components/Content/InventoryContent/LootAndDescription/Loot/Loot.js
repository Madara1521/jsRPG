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
import { PropTypes } from 'prop-types'
import { useState } from "react"



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


  const iconsFields = [
    {
      value: helmetGlovesBootsBeltItems,
      src: helm,
      alt: 'helm'
    },
    {
      value: armorItems,
      src: armor,
      alt: 'armor'
    },
    {
      value: weaponItems,
      src: weapon,
      alt: 'weapon'
    },
    {
      value: shieldItems,
      src: shield,
      alt: 'shield'
    },
    {
      value: ringsAmuletItems,
      src: ring,
      alt: 'ring'
    },
    {
      value: otherItems,
      src: book,
      alt: 'book'
    },
  ]

  const [activeItem, setActiveItem] = useState(null)

  return (
    <div className={classes.loot}>
      <div className={classes.twoTitle}>
        {iconsFields.map((field,index) => {
          return (
            <div
              className={classes.typesOfLoot}
              key={index}
              onClick={() => setViewItem(field.value)}>
              <img src={field.src} alt={field.alt} />
            </div>
          )
        })}
      </div>
      <div className={classes.lootComp}>
        {selectedLoot.map((field, index) => {
          const isActiveItem = field.info.id === activeItem
          return (
            <LootComp
              id={field.info.id}
              lootName={field.info.lootName}
              info={field.info}
              key={index}
              rarity={field.info.rarity}
              setActiveItem={setActiveItem}
              isActiveItem={isActiveItem}
            />
          )
        })}
      </div>
    </div>
  )
}


Loot.propTypes = {
  selectedLoot: PropTypes.array.isRequired,
  helmetGlovesBootsBeltItems: PropTypes.array.isRequired,
  armorItems: PropTypes.array.isRequired,
  weaponItems: PropTypes.array.isRequired,
  shieldItems: PropTypes.array.isRequired,
  ringsAmuletItems: PropTypes.array.isRequired,
  otherItems: PropTypes.array.isRequired,
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