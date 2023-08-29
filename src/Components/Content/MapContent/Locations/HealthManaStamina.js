import React from "react"
import { connect } from "react-redux"
import {  } from "../../../../Redux/actions"
import { makeStyles } from "@mui/styles"
import classNames from 'classnames'
import { PropTypes } from 'prop-types'

export const useStyles = makeStyles(() => ({
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

const HealthManaStamina = (props) => {
  const classes = useStyles()
  const { 
    maxHealth,
    currentHealth,
    maxMana,
    currentMana,
    maxStamina,
    currentStamina,
    isActiveLocation } = props

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
  )

}

HealthManaStamina.propTypes = {
  maxHealth: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  maxMana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  maxStamina: PropTypes.number.isRequired,
  currentStamina: PropTypes.number.isRequired,

}

export default connect(store => {
  return {
    maxHealth: store.characteristicsReducer.maxHealth,
    currentHealth: store.characteristicsReducer.currentHealth,

    maxMana: store.characteristicsReducer.maxMana,
    currentMana: store.characteristicsReducer.currentMana,

    maxStamina: store.characteristicsReducer.maxStamina,
    currentStamina: store.characteristicsReducer.currentStamina,
  }
}, {})(HealthManaStamina)