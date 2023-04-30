import { Toolbar, styled, AppBar, Button, Box } from '@mui/material'

export const StyledToolbar = styled(Toolbar) ({
  display: 'flex'
})

export const Icons = styled(Button)(({ theme }) => ({
  color: 'grey',
  border: '1px solid grey',

}))

export const AppBarComponent = styled(AppBar)({
  position:'fixed',
  color:'black',
  background: 'linear-gradient(0deg, rgba(190,190,190,1) 0%, rgba(214,214,214,1) 11%, rgba(242,241,241,1) 58%)'
})

export const IconsHeader = styled(Box)({
  display: 'flex',
  backgroundSize: 'cover',
  width: '90px',
  height: '90px'
})