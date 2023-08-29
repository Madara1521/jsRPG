import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import Location from "./Locations/Location"
import { connect } from "react-redux"
import { PropTypes } from 'prop-types'
import { viewAct } from "../../../Redux/actions"
import classNames from "classnames"

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(100vh - 102px)',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0em',
      height: '0em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },
  map: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  },
  acts: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  actsIcons: {
    display: 'flex',
    justifyContent: 'center',
    background: '#424242',
    width: '100%',
    border: '3px ridge #a3a3a3',
  },
  activeActsIcons: {
    background: 'green',
  },
}))



const MapContent = (props) => {
  const {
    activeLocationId,
    firstActNormal,
    secondActNormal,
    thirdActNormal,
    fourthActNormal,
    fifthActNormal,
    viewAct,
    activeActId } = props
  const classes = useStyles()
  const [activeLocation, setActiveLocation] = useState(activeLocationId)
  const [activeAct, setActiveAct] = useState(activeActId)

  const actArrayHelper = (index) => {
    switch (index) {
      case 1:
        return firstActNormal
      case 2:
        return secondActNormal
      case 3:
        return thirdActNormal
      case 4:
        return fourthActNormal
      case 5:
        return fifthActNormal
      default:
        return []
    }
  }

  const actFields = [
    {
      id: 1,
      actArray: firstActNormal,
      romanNumeral: 'I'
    },
    {
      id: 2,
      actArray: secondActNormal,
      romanNumeral: 'II'
    },
    {
      id: 3,
      actArray: thirdActNormal,
      romanNumeral: 'III'
    },
    {
      id: 4,
      actArray: fourthActNormal,
      romanNumeral: 'IV'
    },
    {
      id: 5,
      actArray: fifthActNormal,
      romanNumeral: 'V'
    }
  ]

  const locations = actArrayHelper(activeActId)

  const viewActLocations = (idArray, activeArray) => {
    if (activeArray) {
      viewAct(null)
      return setActiveAct(null)
    }
    viewAct(idArray)
    return setActiveAct(idArray)
  }

  return (
    <div className={classes.content} >
      <h1>Map</h1>
      <div className={classes.acts}>
        {actFields.map((field) => {
          const isActiveAct = field.id === activeAct
          return (
            <div
              className={classNames(classes.actsIcons, isActiveAct && classes.activeActsIcons)}
              key={field.id}
              onClick={() => viewActLocations(field.id,isActiveAct)}
            >
              {field.romanNumeral}
            </div>
          )
        })}
      </div>
      <div className={classes.map}>
        {locations.map((field) => {
          const isActiveLocation = field.id === activeLocation
          return (
            <Location
              name={field.name}
              zoneLevel={field.zoneLevel}
              numberOfMonsters={field.numberOfMonsters}
              locationClearTime={field.locationClearTime}
              monsters={field.monsters}
              setActiveLocation={setActiveLocation}
              isActiveLocation={isActiveLocation}
              key={field.id}
              id={field.id}
            />
          )
        })}
      </div>
    </div>
  )
}

MapContent.propTypes = {
  activeLocationId: PropTypes.number.isRequired,
}

export default connect(store => {
  return {
    firstActNormal: store.locationsReducer.firstActNormal,
    secondActNormal: store.locationsReducer.secondActNormal,
    thirdActNormal: store.locationsReducer.thirdActNormal,
    fourthActNormal: store.locationsReducer.fourthActNormal,
    fifthActNormal: store.locationsReducer.fifthActNormal,
    activeLocationId: store.locationsReducer.activeLocationId,
    activeActId: store.locationsReducer.activeActId,
  }
}, {viewAct})(MapContent)