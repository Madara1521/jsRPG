import React, { useEffect, useRef } from "react"
import helm from './helm.png'
import armor from './armor.png'
import weapon from './weapon.png'
import shield from './shield.png'
import ring from './ring.png'
import book from './book.png'
import { viewItem } from "../../../../../Redux/actions"
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
    background: 'linear-gradient(180deg, rgba(55,55,55,0.41220238095238093) 0%, rgba(63,63,63,0.8575805322128851) 45%, rgba(70,70,70,1) 100%)',
    border: '1px ridge rgba(41, 40, 40)',
    width: '49px',
    height: '35px',
  },
  activeHelmetItems: {
    background: 'linear-gradient(90deg, rgba(189,66,0,0.41220238095238093) 0%, rgba(220,85,0,0.7147233893557423) 26%, rgba(239,97,0,0.8463760504201681) 56%, rgba(255,106,0,1) 90%)',
  },
  activeArmorItems: {
    background: 'linear-gradient(90deg, rgba(93,81,181,0.4822303921568627) 0%, rgba(112,99,210,0.6474964985994398) 45%, rgba(117,102,231,1) 86%)',
  },
  activeWeaponItems: {
    background: 'linear-gradient(90deg, rgba(255,0,0,0.0984768907563025) 0%, rgba(210,0,0,0.6474964985994398) 45%, rgba(209,0,0,1) 86%)',
  },
  activeShieldItems: {
    background: 'linear-gradient(90deg, rgba(255,255,255,0.3225665266106442) 0%, rgba(255,255,255,0.6474964985994398) 45%, rgba(255,255,255,1) 86%)',
  },
  activeRingItems: {
    background: 'linear-gradient(90deg, rgba(255,231,0,0.3225665266106442) 0%, rgba(251,227,0,0.6474964985994398) 45%, rgba(250,235,0,1) 86%)',
  },
  activeOtherItems: {
    background: 'linear-gradient(90deg, rgba(129,255,0,0.36458333333333337) 0%, rgba(89,251,0,0.6474964985994398) 45%, rgba(0,168,3,1) 86%)',
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
    viewItem,
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
        return []
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

  const viewArrayItems = (activeIdArray, isActiveArrayId) => {
    if (isActiveArrayId) {
      viewItem(null)
      return setActiveArray(null)
    }
    viewItem(activeIdArray)
    return setActiveArray(activeIdArray)
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
              key={field.id}
              onClick={() => viewArrayItems(field.id, isActiveArray)}
            >
              <img src={field.src} alt={field.alt} />
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
  helmetGlovesBootsBeltItems: PropTypes.array.isRequired,
  armorItems: PropTypes.array.isRequired,
  weaponItems: PropTypes.array.isRequired,
  shieldItems: PropTypes.array.isRequired,
  ringsAmuletItems: PropTypes.array.isRequired,
  otherItems: PropTypes.array.isRequired,
}

export default connect((store, ownProps) => {
  return {
    idArray: store.lootAndDescriptionReducer.idArray,
    helmetGlovesBootsBeltItems: store.lootAndDescriptionReducer.helmetGlovesBootsBelt,
    armorItems: store.lootAndDescriptionReducer.armor,
    weaponItems: store.lootAndDescriptionReducer.weapon,
    shieldItems: store.lootAndDescriptionReducer.shield,
    ringsAmuletItems: store.lootAndDescriptionReducer.ringsAmulet,
    otherItems: store.lootAndDescriptionReducer.other,
  }
}, { viewItem })(Loot)