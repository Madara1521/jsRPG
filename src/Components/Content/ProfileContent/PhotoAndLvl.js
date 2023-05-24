import React, { useEffect } from "react"
import { useStyles } from "../../Styles"
import barbarian from './Barbarian.webp'
import { Stack, Box } from '@mui/material'
import { connect } from "react-redux"
import { rankUpdate } from "../../../Redux/actions"
import { PropTypes } from 'prop-types'


const PhotoAndLvl = (props) => {
  const { rankUpdate, level, rank } = props
  const classes = useStyles()

  const levelActions = [
    { lvl: 10, rank: 'Recruit' },
    { lvl: 20, rank: 'Guardian' },
    { lvl: 40, rank: 'Warrior' },
    { lvl: 60, rank: 'Knight' },
  ]

  useEffect(() => {
    levelActions.forEach(({ lvl, rank }) => {
      if (level >= lvl) {
        rankUpdate(rank)
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

PhotoAndLvl.propTypes = {
  level: PropTypes.number.isRequired,
  rank: PropTypes.string.isRequired,
  rankUpdate: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    level: store.levelReducer.level,
    rank: store.levelReducer.rank
  }
}, { rankUpdate })(PhotoAndLvl)