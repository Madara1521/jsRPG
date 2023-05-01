import React from "react"
import { useStyles } from "../../Styles"
import { StyledToolbar } from "../../Header/StyledHeader"
import { Stack } from '@mui/material'
import barbarian from './Barbarian.webp'

const ProfileContent = () => {
  const classes = useStyles()

  return (
    <StyledToolbar>
      <div className={classes.container}>
        <Stack direction='column'>
          <div className={classes.titleComp}>
            <h1>Nikname</h1>
          </div>
          <div className={classes.imgComp}>
            <div className={classes.imgBorder}>
              <img src={barbarian} alt='img' />
            </div>
            <Stack direction='column'>
              <div>
                <h1>Lvl: 99</h1>
                <h1>Rank: god</h1>
              </div>
            </Stack>
          </div>
        </Stack>
      </div>
    </StyledToolbar>
  )
}

export default ProfileContent