import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../Styles"
import { useDispatch, useSelector } from "react-redux"
import { totalDexterity, totalEnergy, totalStrength, totalVitality } from "../../../Redux/actions"


const Characteristics = () => {
  const classes = useStyles()
  const dispatch = useDispatch()



  const strengthArmor = useSelector(state => state.bonusReducer.armorBonus.strength)
  const strength = useSelector(state => state.attributeReducer.strength)
  const allStrength = strength + strengthArmor
  dispatch(totalStrength(allStrength))
  const characteristicsStrength = useSelector(state => state.characteristicsReducer.totalStrength)

  const dexterityArmor = useSelector(state => state.bonusReducer.armorBonus.dexterity)
  const dexterity = useSelector(state => state.attributeReducer.dexterity)
  const allDexterity = dexterity + dexterityArmor
  dispatch(totalDexterity(allDexterity))
  const characteristicsDexterity = useSelector(state => state.characteristicsReducer.totalDexterity)

  const vitalityArmor = useSelector(state => state.bonusReducer.armorBonus.vitality)
  const vitality = useSelector(state => state.attributeReducer.vitality)
  const allVitality = vitality + vitalityArmor
  dispatch(totalVitality(allVitality))
  const characteristicsVitality = useSelector(state => state.characteristicsReducer.totalVitality)

  const energyArmor = useSelector(state => state.bonusReducer.armorBonus.energy)
  const energy = useSelector(state => state.attributeReducer.energy)
  const allEnergy = energy + energyArmor
  dispatch(totalEnergy(allEnergy))
  const characteristicsEnergy = useSelector(state => state.characteristicsReducer.totalEnergy)

  return (
    <Stack direction='row' flex={2}>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <div>Strength: {characteristicsStrength}</div>
        <div>Dexterity: {characteristicsDexterity}</div>
        <div>Vitality: {characteristicsVitality}</div>
        <div>Energy: {characteristicsEnergy}</div>
      </Stack>
      <Stack className={classes.charBorder} flex={1} spacing={1}>
        <div>physical damage: 3000-1500</div>
        <div>magic damage: 8000-11000</div>
        <div>Mana: 1200</div>
        <div>health: 2500</div>
        <div>Stamina: 1000</div>
      </Stack>
    </Stack>
  )
}

export default Characteristics