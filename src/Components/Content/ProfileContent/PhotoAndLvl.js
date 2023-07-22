import React, { useEffect } from "react"
import barbarian from './Barbarian.webp'
import { connect } from "react-redux"
import { rankUpdate } from "../../../Redux/actions"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down("sm")]: { 
      flexDirection: 'column',
    }
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    border: 'black 1px solid',
    flex: 1,
  },
  level: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    '& div': {
      marginTop: '10px',
      marginBottom: '10px'
    }
  },
}))

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
    <div className={classes.placing}>
      <div className={classes.img}>
        <img src={barbarian} alt='img' />
      </div>
      <div className={classes.level}>
        <div>Class: Barbarian</div>
        <div>Level: {level}</div>
        <div>Rank: {rank}</div>
        <div>Difficulty level: normal</div>
      </div>
    </div>
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