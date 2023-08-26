import React, { useEffect } from "react"
import { connect } from "react-redux"
import { pushReceivedItem, setTimer, setIdLocation, setGenerationRingsAmulets } from "../../../../Redux/actions"
import { makeStyles } from "@mui/styles"
import classNames from 'classnames'
import { PropTypes } from 'prop-types'

export const useStyles = makeStyles(() => ({
  locationComponent: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    maxHeight: '150px',
    opacity: '0.8'
  },
  activeLocationComponent: {
    background: 'linear-gradient(90deg, rgba(99,0,165,0.53) 0%, rgba(165,0,39,0.8407738095238095) 50%, rgba(156,165,0,0.53) 100%)',
    opacity: '1'
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
    background: 'red',
    flexDirection: 'row',
  },
  manaContainer: {
    display: 'flex',
    flex: 1,
    background: 'blue',
    flexDirection: 'row',
  },
  staminaContainer: {
    display: 'flex',
    flex: 1,
    background: 'green',
    flexDirection: 'row',
  },
  nullContainer: {
    display: 'none',
  },
  text: {
    paddingLeft: '10px',
  }
}))

const Location = (props) => {
  const classes = useStyles()
  const {
    helmetGlovesBootsBelt,
    pushReceivedItem,
    armors,
    weapons,
    shields,
    ringsAmulets,
    others,
    name,
    zoneLevel,
    numberOfMonsters,
    locationClearTime,
    timer,
    setTimer,
    setActiveLocation,
    isActiveLocation,
    id,
    setIdLocation,
    activeId,
    setGenerationRingsAmulets,
    maxHealth,
    currentHealth,
    maxMana,
    currentMana,
    maxStamina,
    currentStamina  } = props


  useEffect(() => {
    setGenerationRingsAmulets(zoneLevel)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const pushItems = () => {
    pushReceivedItem('helmetGlovesBootsBelt', helmetGlovesBootsBelt)
    pushReceivedItem('armor', armors)
    pushReceivedItem('weapon', weapons)
    pushReceivedItem('shield', shields)
    pushReceivedItem('ringsAmulet', ringsAmulets)
    pushReceivedItem('other', others)
  }

  const handleClickStart = () => {
    if (timer < 0) {
      let i = (locationClearTime)
      setTimer(i)
      const time = setInterval(function () {
        i--
        setTimer(i)
        if (i === -1) {
          clearInterval(time)
          setTimer(i, pushItems())
        }
      }, 1000)
    }
  }
  const handleClickLocation = () => {
    if (timer > -1) {
      return setActiveLocation(activeId)
    }
    setGenerationRingsAmulets(zoneLevel)
    setIdLocation(id)
    return setActiveLocation(id)
  }

  const health = () => {
    return (currentHealth / maxHealth) * 100
  }
  const mana = () => {
    return (currentMana / maxMana) * 100
  }
  const stamina = () => {
    return (currentStamina / maxStamina) * 100
  }

  return (
    <div
      className={classNames(
        isActiveLocation && classes.activeLocationComponent, classes.locationComponent)}
      onClick={handleClickLocation}
    >
      <div className={classes.locationInfo}>
        <div>Location: {name}</div>
        <div>Zone level: {zoneLevel}</div>
        <div>Number of monsters: {numberOfMonsters}</div>
        <div>Location clear time: {locationClearTime}s</div>
      </div>
      <div className={classes.actionWindow}>
        <div className={classes.buttonContainer}>
          <div
            className={classNames(!isActiveLocation && classes.nullContainer, classes.startButton)}
            onClick={handleClickStart}
          >
            <div className={classNames((timer > -1) && classes.nullContainer)}>start</div>
            <div className={classNames((timer === -1) && classes.nullContainer)}>{timer}s</div>
          </div>
          <div className={classNames(!isActiveLocation && classes.nullContainer, classes.stopButton)}>stop</div>
        </div>
        <div className={classes.healthManaContainer}>
          <div
            className={classNames(!isActiveLocation && classes.nullContainer, classes.healthContainer)}
            style={{ width: `${health()}%` }}
          >
            <div className={classes.text}>Health</div>
          </div>
          <div
            className={classNames(!isActiveLocation && classes.nullContainer, classes.manaContainer)}
            style={{ width: `${mana()}%` }}
          >
            <div className={classes.text}>Mana</div>
          </div>
          <div
            className={classNames(!isActiveLocation && classes.nullContainer, classes.staminaContainer)}
            style={{ width: `${stamina()}%` }}
          >
            <div className={classes.text}>Stamina</div>
          </div>
        </div>
        <div className={classes.skillsContainer}>
        </div>
      </div>
    </div>
  )
}

Location.propTypes = {
  helmetGlovesBootsBelt: PropTypes.array.isRequired,
  armors: PropTypes.array.isRequired,
  weapons: PropTypes.array.isRequired,
  shields: PropTypes.array.isRequired,
  ringsAmulets: PropTypes.array.isRequired,
  others: PropTypes.array.isRequired,
  timer: PropTypes.number.isRequired,
  activeId: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  maxMana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  maxStamina: PropTypes.number.isRequired,
  currentStamina: PropTypes.number.isRequired,

  pushReceivedItem: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  setIdLocation: PropTypes.func.isRequired,
  setGenerationRingsAmulets: PropTypes.func.isRequired,
}


export default connect(store => {
  return {
    helmetGlovesBootsBelt: store.lootOptionsReducer.helmetGlovesBootsBelt,
    armors: store.lootOptionsReducer.armor,
    weapons: store.lootOptionsReducer.weapon,
    shields: store.lootOptionsReducer.shield,
    ringsAmulets: store.lootOptionsReducer.ringsAmulet,
    others: store.lootOptionsReducer.other,

    timer: store.locationsReducer.timer,
    activeId: store.locationsReducer.activeId,

    maxHealth: store.characteristicsReducer.maxHealth,
    currentHealth: store.characteristicsReducer.currentHealth,

    maxMana: store.characteristicsReducer.maxMana,
    currentMana: store.characteristicsReducer.currentMana,

    maxStamina: store.characteristicsReducer.maxStamina,
    currentStamina: store.characteristicsReducer.currentStamina,
  }
}, {
  pushReceivedItem,
  setTimer,
  setIdLocation,
  setGenerationRingsAmulets
})(Location)