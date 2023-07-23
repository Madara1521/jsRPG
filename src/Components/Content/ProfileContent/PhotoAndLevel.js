import React, { useEffect } from "react"
import barbarian from './Barbarian.webp'
import { connect } from "react-redux"
import { rankUpdate } from "../../../Redux/actions"
import { PropTypes } from 'prop-types'
import { makeStyles } from "@mui/styles"
import divImg from '../img/divBackground.png'


const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 2,
    backgroundImage: `url(${divImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    flexDirection: 'row',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
    },
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    border: 'black 1px solid',
    backdropFilter: 'blur(3px)',
    flex: 1,
  },
  level: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    border: 'black 1px solid',
    '& div': {
      marginTop: '4px',
      marginBottom: '4px',
      padding: '1px'
    }
  },
}))

const PhotoAndLevel = (props) => {
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
        <div>Name: Rubaka115</div>
        <div>Class: Barbarian</div>
        <div>Level: {level}</div>
        <div>Rank: {rank}</div>
        <div>Difficulty level: normal</div>
      </div>
    </div>
  )
}

PhotoAndLevel.propTypes = {
  level: PropTypes.number.isRequired,
  rank: PropTypes.string.isRequired,
  rankUpdate: PropTypes.func.isRequired,
}

export default connect(store => {
  return {
    level: store.levelReducer.level,
    rank: store.levelReducer.rank
  }
}, { rankUpdate })(PhotoAndLevel)