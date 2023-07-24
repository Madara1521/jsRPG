import React from "react"
import pluse from './AtribPlus-removebg-preview.png'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  iconPluse: {
    display: 'flex',
    backgroundSize: 'cover',
    width: '30px',
    height: '30px',
    justifyContent: 'center',
    border: 'black 1px solid'
  },
}))


const IconsAttribute = () => {
  const classes = useStyles()

  return (
    <div className={classes.iconPluse}>
      <img src={pluse} alt='icon' />
    </div>
  )
}

export default IconsAttribute