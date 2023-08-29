import React, { useEffect } from "react"
import { connect } from "react-redux"
import { pushReceivedItem, setTimer, setIdLocation, setGenerationRingsAmulets, incrementExperience } from "../../../../Redux/actions"
import { makeStyles } from "@mui/styles"
import classNames from 'classnames'
import { PropTypes } from 'prop-types'
import HealthManaStamina from "./HealthManaStamina"

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
  nullContainer: {
    display: 'none',
  },
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
    activeLocationId,
    setGenerationRingsAmulets,
    incrementExperience  } = props


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
          incrementExperience()
          pushItems()
          setTimer(i)
        }
      }, 1000)
    }
  }
  const handleClickLocation = () => {
    if (timer > -1) {
      return setActiveLocation(activeLocationId)
    }
    setGenerationRingsAmulets(zoneLevel)
    setIdLocation(id)
    return setActiveLocation(id)
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
        <HealthManaStamina isActiveLocation={isActiveLocation}/>
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
  activeLocationId: PropTypes.number.isRequired,

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
    activeLocationId: store.locationsReducer.activeLocationId,
  }
}, {
  pushReceivedItem,
  setTimer,
  setIdLocation,
  setGenerationRingsAmulets,
  incrementExperience
})(Location)