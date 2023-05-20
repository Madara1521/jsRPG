import React, { useEffect } from "react"
import { useStyles } from "../../Styles"
import barbarian from './Barbarian.webp'
import { Stack, Box } from '@mui/material'
import { connect, useSelector } from "react-redux"
import { rankUpdate10, rankUpdate20, rankUpdate40, rankUpdate60 } from "../../../Redux/actions"


const PhotoAndLvl = ({ rankUpdate10, rankUpdate20, rankUpdate40, rankUpdate60 }) => {
  const classes = useStyles()
  const level = useSelector(state => state.levelReducer.level)
  const rank = useSelector(state => state.levelReducer.rank)

  useEffect(() => {
    const levelActions = [
      { lvl: 10, action: rankUpdate10 },
      { lvl: 20, action: rankUpdate20 },
      { lvl: 40, action: rankUpdate40 },
      { lvl: 60, action: rankUpdate60 },
    ]
    levelActions.forEach(({ lvl, action }) => {
      if (level >= lvl) {
        action()
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]) 

  return (
    <Stack direction='row' flex={2}>
      <Box className={classes.imgBorder} flex={1}>
        <img src={barbarian} alt='img' />
      </Box>
      <Stack direction='column' className={classes.lvlBorder} flex={1} spacing={1}>
        <div>Class: Barbarian</div>
        <div>Level: {level}</div>
        <div>Rank: {rank}</div>
        <div>Difficulty level: normal</div>
      </Stack>
    </Stack>
  )
}

export default connect(null, { rankUpdate10, rankUpdate20, rankUpdate40, rankUpdate60 })(PhotoAndLvl)