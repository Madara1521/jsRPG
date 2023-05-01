import { makeStyles } from "@mui/styles"


export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px',
    direction: 'column'
  },
  titleComp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'black 1px solid',
    width: '610px'
  },
  imgComp: {
    display: 'flex',
    justifyContent: 'space-bettwen',
    border: 'black 1px solid',
    width: '610px'
  },
  imgBorder: {
    display: 'flex',
    border: '5px #424242 solid',
    justifyContent: 'center',
    justifyItems: 'center'
  }

}))