import React from "react"
import { useStyles } from "../../Styles"
import barbarian from './Barbarian.webp'
import { Stack, Box } from '@mui/material'
import { useSelector } from "react-redux"

const PhotoAndLvl = () => {
  const classes = useStyles()
  const level = useSelector(state => state.levelReducer.level)

  return (
    <Stack direction='row' flex={2}>
      <Box className={classes.imgBorder} flex={1}>
        <img src={barbarian} alt='img' />
      </Box>
      <Stack direction='column' className={classes.lvlBorder} flex={1} spacing={1}>
        <div>Class: Barbarian</div>
        <div>Level: {level}</div>
        <div>Rank: god</div>
        <div>Difficulty level: normal</div>
      </Stack>
    </Stack>
  )
}

export default PhotoAndLvl