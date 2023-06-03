import React from "react"
import { Stack } from '@mui/material'
import { useStyles } from "../../../Styles"

const LootAndDescription = () => {
  const classes = useStyles()

  return (
    <Stack direction='row' flex={2}>
      <Stack>
        <div className={classes.twoTitle}>
          <h1>Loot</h1>
        </div>
      </Stack>
      <Stack>
        <div className={classes.twoTitle}>
          <h1>Item description</h1>
        </div>
      </Stack>
    </Stack>
  )
}

export default LootAndDescription