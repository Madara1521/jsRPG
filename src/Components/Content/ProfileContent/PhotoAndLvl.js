import React from "react"
import { useStyles } from "../../Styles"
import barbarian from './Barbarian.webp'
import { Stack, Box } from '@mui/material'

const PhotoAndLvl = () => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Box className={classes.imgBorder} flex={1}>
        <img src={barbarian} alt='img' />
      </Box>
      <Stack direction='column' className={classes.lvlBorder} flex={1} spacing={1}>
        <div>Lvl: 99</div>
        <div>Rank: god</div>
        <div>Difficulty level: normal</div>
      </Stack>
    </Stack>
  )
}

export default PhotoAndLvl