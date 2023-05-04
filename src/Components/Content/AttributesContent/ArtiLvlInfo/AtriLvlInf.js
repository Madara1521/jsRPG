import React from "react"
import { Stack } from '@mui/material'
import LeftTable from "./LeftTable"
import RigthTable from "./RightTable"

const AtriLvlInf = () => {

  return (
    <Stack direction='row' flex={2}>
      <LeftTable />
      <RigthTable />
    </Stack>
  )
}

export default AtriLvlInf