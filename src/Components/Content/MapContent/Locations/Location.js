import React from "react"
import { connect } from "react-redux"
import { setPushItem } from "../../../../Redux/actions"
import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
  locationComponent: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    maxHeight: '150px'
  },
  locationInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
  },
  actionWindow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
  },
  buttonContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    border: '1px ridge #a3a3a3',
  },
  startButton: {
    display: 'flex',
    flex: 1,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px ridge #a3a3a3',
  },
  stopButton: {
    display: 'flex',
    flex: 1,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px ridge #a3a3a3',
  },
  skillsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    border: '1px ridge #a3a3a3',
  },
  healthManaContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px ridge #a3a3a3',
  },
  healthContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: '10px',
    background: 'red',
    flexDirection: 'row',
    border: '1px ridge #a3a3a3',
  },
  manaContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: '10px',
    background: 'blue',
    flexDirection: 'row',
    border: '1px ridge #a3a3a3',
  },
}))

const Location = (props) => {
  const classes = useStyles()
  const {
    helmetGlovesBootsBelt,
    setPushItem,
    armors,
    weapons,
    shields,
    ringsAmulets,
    others,
    name,
    zoneLevel,
    numberOfMonsters,
    locationClearTime } = props

  const inventoryLootUpdate = () => {
    setTimeout(
      function () {
        setPushItem('helmetGlovesBootsBelt', helmetGlovesBootsBelt)
        setPushItem('armor', armors)
        setPushItem('weapon', weapons)
        setPushItem('shield', shields)
        setPushItem('ringsAmulet', ringsAmulets)
        setPushItem('other', others)
      }, locationClearTime
    )
  }

  return (
    <div className={classes.locationComponent}>
      <div className={classes.locationInfo}>
        <div>Location: {name}</div>
        <div>Zone level: {zoneLevel}</div>
        <div>Number of monsters: {numberOfMonsters}</div>
        <div>Location clear time: {locationClearTime}</div>
      </div>
      <div className={classes.actionWindow}>
        <div className={classes.buttonContainer}>
          <div className={classes.startButton} onClick={inventoryLootUpdate(locationClearTime)}>start</div>
          <div className={classes.stopButton}>stop</div>
        </div>
        <div className={classes.healthManaContainer}>
          <div className={classes.healthContainer}>
            Health
          </div>
          <div className={classes.manaContainer}>
            Mana
          </div>
        </div>
        <div className={classes.skillsContainer}>
        </div>
      </div>
    </div>
  )
}

export default connect(store => {
  return {
    gold: store.lootAndDescriptionReducer.gold,
    helmetGlovesBootsBelt: store.lootOptionsReducer.helmetGlovesBootsBelt,
    armors: store.lootOptionsReducer.armor,
    weapons: store.lootOptionsReducer.weapon,
    shields: store.lootOptionsReducer.shield,
    ringsAmulets: store.lootOptionsReducer.ringsAmulet,
    others: store.lootOptionsReducer.other,
  }
}, { setPushItem })(Location)