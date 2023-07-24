import React, { useEffect, useRef } from "react"
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
import classNames from "classnames"

const useStyles = makeStyles((theme) => ({
  loot: {
    display: 'flex',
    flex: '1',
    border: '3px ridge #a3a3a3',
    flexDirection: 'column',
    backdropFilter: 'blur(3px)',
    [theme.breakpoints.down("sm")]: {
      alignItems: 'center',
    }
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '304px',
    height: '37px',
  },
  typesOfLoot: {
    display: 'flex',
    justifyContent: 'center',
    background: 'rgba(148, 146, 145)',
    border: '1px solid #ed0000',
    width: '49px',
    height: '35px',
  },
  activeHelmetItems: {
    background: 'rgba(240, 130, 5)',
  },
  activeArmorItems: {
    background: 'rgba(93, 81, 181)',
  },
  activeWeaponItems: {
    background: 'rgba(148, 50, 4)',
  },
  activeShieldItems: {
    background: 'rgba(154, 4, 204)',
  },
  activeRingItems: {
    background: 'rgba(250, 225, 0)',
  },
  activeOtherItems: {
    background: 'rgba(21, 250, 0)',
  },
  lootComp: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '210px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      height: '240px'
    }
  },
}))


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
    idArray, } = props


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
  const arrayColorHelper = (index) => {
    switch (index) {
      case 1:
        return classes.activeHelmetItems
      case 2:
        return classes.activeArmorItems
      case 3:
        return classes.activeWeaponItems
      case 4:
        return classes.activeShieldItems
      case 5:
        return classes.activeRingItems
      case 6:
        return classes.activeOtherItems
      default:
        return classes.typesOfLoot
    }
  }

  const [activeItem, setActiveItem] = useState(null)
  const [activeArray, setActiveArray] = useState(null)
  const ref = useRef(null)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveItem(null)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

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

  const viewItem = (idArray, isActiveArray) => {
    if (isActiveArray) {
      setViewItem(null)
      return setActiveArray(null)
    }
    setViewItem(idArray)
    return setActiveArray(idArray)
  }

  const lootItems = itemArrayHelper(idArray)
  const arrayColor = arrayColorHelper(idArray)

  return (
    <div className={classes.loot}>
      <div className={classes.iconsContainer}>
        {iconsFields.map((field, index) => {
          const isActiveArray = field.id === activeArray
          return (
            <div
              className={classNames(classes.typesOfLoot, isActiveArray && arrayColor)}
              key={index}
              onClick={() => viewItem(field.id, isActiveArray)}>
              <img src={field.src} alt={field.alt}/>
            </div>
          )
        })}
      </div>
      <div
        ref={ref}
        className={classes.lootComp}
      >
        {lootItems.map((field, index) => {
          const isActiveItem = field.info.id === activeItem
          return (
            <LootComp
              id={field.info.id}
              lootName={field.info.lootName}
              info={field.info}
              requirements={field.requirements}
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
    idArray: store.lootAndDescriptionReducer.idArray,
    helmetGlovesBootsBeltItems: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    armorItems: store.lootAndDescriptionReducer.armor,
    weaponItems: store.lootAndDescriptionReducer.weapon,
    shieldItems: store.lootAndDescriptionReducer.shield,
    ringsAmuletItems: store.lootAndDescriptionReducer.ringsAmulet,
    otherItems: store.lootAndDescriptionReducer.other,
  }
}, { setViewItem })(Loot)