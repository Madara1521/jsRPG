import React from "react"
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
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  loot: {
    display: 'flex',
    border: 'black 1px solid',
    flexDirection: 'column',

  },
  twoTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '304px',
    height: '37px'
  },
  typesOfLoot: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(148, 146, 145)',
    border: '1px solid #ed0000',
    width: '49px',
    height: '35px',

  },
  lootComp: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '243px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    }
  },
})


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
    idArray } = props

  const itemArrayHelper = (index) => {
    switch (index) {
      case 1:
        return helmetGlovesBootsBeltItems
      case 2:
        return armorItems
      case 3:
        return weaponItems
      case 4:
        return shieldItems
      case 5:
        return ringsAmuletItems
      case 6:
        return otherItems
      default:
        return selectedLoot
    }
  }

  const [activeItem, setActiveItem] = useState(null)

  const iconsFields = [
    {
      id: 1,
      src: helm,
      alt: 'helm'
    },
    {
      id: 2,
      src: armor,
      alt: 'armor'
    },
    {
      id: 3,
      src: weapon,
      alt: 'weapon'
    },
    {
      id: 4,
      src: shield,
      alt: 'shield'
    },
    {
      id: 5,
      src: ring,
      alt: 'ring'
    },
    {
      id: 6,
      src: book,
      alt: 'book'
    },
  ]

  const viewItem = (idArray) => {
    setViewItem(idArray)
  }

  const lootItems = itemArrayHelper(idArray)

  return (
    <div className={classes.loot}>
      <div className={classes.twoTitle}>
        {iconsFields.map((field, index) => {
          return (
            <div
              className={classes.typesOfLoot}
              key={index}
              onClick={() => viewItem(field.id)}>
              <img src={field.src} alt={field.alt} />
            </div>
          )
        })}
      </div>
      <div className={classes.lootComp}>
        {lootItems.map((field, index) => {
          const isActiveItem = field.info.id === activeItem
          return (
            <LootComp
              id={field.info.id}
              lootName={field.info.lootName}
              info={field.info}
              key={index}
              index={index}
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
    idArray: store.lootAndDescriptionReducer.idArray,
    helmetGlovesBootsBeltItems: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    armorItems: store.lootAndDescriptionReducer.armor,
    weaponItems: store.lootAndDescriptionReducer.weapon,
    shieldItems: store.lootAndDescriptionReducer.shield,
    ringsAmuletItems: store.lootAndDescriptionReducer.ringsAmulet,
    otherItems: store.lootAndDescriptionReducer.other,
  }
}, { setViewItem })(Loot)