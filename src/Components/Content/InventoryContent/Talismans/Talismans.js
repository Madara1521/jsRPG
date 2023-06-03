import React from "react"
import { Stack } from '@mui/material'
import TalismansComp from "./TalismansComp"
import { useStyles } from "../../../Styles"

const Talismans = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.titleComp}>
        <h1>Talismans</h1>
      </div>
      <Stack direction='row'>
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
      </Stack>
    </div>
  )
}

export default Talismans