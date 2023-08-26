import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import Location from "./Locations/Location"
import { connect } from "react-redux"

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
  }
}))

const MapContent = (props) => {
  const { locations, activeId } = props
  const classes = useStyles()
  const [activeLocation, setActiveLocation] = useState(activeId)

  return (
    <div className={classes.content} >
      <h1>Map</h1>
      <div className={classes.map}>
        {locations.map((field, index) => {
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

export default connect(store => {
  return {
    locations: store.locationsReducer.locations,
    activeId: store.locationsReducer.activeId,
  }
}, { })(MapContent)