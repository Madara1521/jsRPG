import React from "react"
import TalismansComp from "./TalismansComp"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'

const useStyles = makeStyles((theme)=> ({
  placing: {
    display: 'flex',
    flexDirection: 'row',
    backgroundImage: `url(${divImg})`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  placingContainer: {
    display: 'flex',
    flexDirection: 'row',
    backdropFilter: 'blur(3px)',
  },
}))

const Talismans = () => {
  const classes = useStyles()

  return (
    <div className={classes.placing}>
      <div className={classes.placingContainer}>
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
      </div>
      <div className={classes.placingContainer}>
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
      </div>
    </div>
  )
}

export default Talismans