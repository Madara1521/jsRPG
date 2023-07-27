import React from "react"
import LeftTable from "./LeftTable"
import RigthTable from "./RightTable"
import { makeStyles } from "@mui/styles"
import divImg from '../../img/divBackground.png'

const useStyles = makeStyles((theme) => ({
  placing: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    backgroundImage: `url(${divImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
    },
  }
}))

const AttributeLevelInfo = () => {
  const classes = useStyles()

  return (
    <div className={classes.placing}>
      <LeftTable />
      <RigthTable />
    </div>
  )
}

export default AttributeLevelInfo