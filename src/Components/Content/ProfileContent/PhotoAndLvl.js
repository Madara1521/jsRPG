import React, { useEffect } from "react"
import { useStyles } from "../../Styles"
import barbarian from './Barbarian.webp'
import { Stack, Box } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { rankUpdate10, rankUpdate20 } from "../../../Redux/actions"

const PhotoAndLvl = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const level = useSelector(state => state.levelReducer.level)
  const rank = useSelector(state => state.levelReducer.rank)

  useEffect(() => {
    if (level >= 20 ){
      dispatch(rankUpdate20())
      console.log('upRank20')
    } else if (level >= 10 ){
      dispatch(rankUpdate10())
      console.log('upRank10')
    }
  },[dispatch,level])


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

export default PhotoAndLvl