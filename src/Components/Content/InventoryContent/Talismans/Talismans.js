import React from "react"
import TalismansComp from "./TalismansComp"
import { useStyles } from "../../../Styles"

const Talismans = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.titleComp}>
        <h1>Talismans</h1>
      </div>
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
    </div>
  )
}

export default Talismans