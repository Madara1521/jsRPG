import React from "react"
import { makeStyles } from "@mui/styles"
import divImg from '../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    backgroundImage: `url(${divImg})`,
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
    }
  },
  info: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '3px ridge #a3a3a3',
    backdropFilter: 'blur(3px)',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      marginTop: '3px',
      marginBottom: '3px',
      padding: '1px'
    }
  }
}))

const GeneralInfo = () => {
  const classes = useStyles()

  return (
    <div className={classes.placing}>
      <div className={classes.info}>
        <div>Gold bonus: 100%</div>
        <div>Magic items bonus: 250%</div>
        <div>Posion damage: 250-300</div>
        <div>Cold damage: 150-300</div>
        <div>Lightning damage: 50-300</div>
        <div>Fire damage: 350-500</div>
        <div>Experience bonus: 10%</div>
      </div>
      <div className={classes.info}>
        <div>Fire Resistance: 25%</div>
        <div>Cold Resistance: 25%</div>
        <div>Lightning Resistance: 25%</div>
        <div>Posion Resistance: 25%</div>
        <div>Magic Resistance: 25%</div>
      </div>
    </div>
  )
}

export default GeneralInfo