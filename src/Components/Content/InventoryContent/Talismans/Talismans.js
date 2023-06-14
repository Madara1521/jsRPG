import React from "react"
import TalismansComp from "./TalismansComp"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  stackRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    height: '37px'
  }
})

const Talismans = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.stackRow}>
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
        <TalismansComp />
      </div>
      <div className={classes.titleComp}>
        <h1>Talismans</h1>
      </div>
    </div>
  )
}

export default Talismans