import React from "react"
import Header from './Components/Header/Header'
import ProfileContent from "./Components/Content/ProfileContent/ProfileContent"
import { Route, Routes } from "react-router-dom"
import InvertoryContent from "./Components/Content/InventoryContent/InvertoryContent"
import AttributeContent from "./Components/Content/AttributesContent/AttributesContent"
import SkillsContent from "./Components/Content/SkillsContent/SkillsContent"
import MapContent from "./Components/Content/MapContent/MapContent"
import TradeContent from "./Components/Content/TradeContent/TradeContent"
import { Paper, AppBar } from '@mui/material'
import { makeStyles } from "@mui/styles"
import penta from './Components/Header/penta.png'
import mainImg from './Components/Content/img/mainBackground.png'



const useStyles = makeStyles((theme) => ({
  root: {
    '& div': {
      fontSize: '20px',
      color: 'rgb(237, 237, 237)',
      '-webkit-text-stroke': '0.3px black',
    },
    '& h1': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(77,77,77,1) 30%, rgba(77,77,77,1) 55%, rgba(54,54,54,1) 98%)',
      letterSpacing: '2px',
      color: 'rgb(214, 0, 0)',
      '-webkit-text-stroke': '0.5px black',
      border: '3px ridge #a3a3a3',
      fontSize: '160%',
      width: '606px',
      height: '37px',
    },
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(22,22,22,1) 30%, rgba(60,60,60,1) 50%, rgba(15,15,15,1) 74%, rgba(0,0,0,1) 100%)',
  },
  penta: {
    display: 'flex',
    maxWidth: '150px',
    maxHeight: '100px',
    [theme.breakpoints.down("md")]: {
      display: 'none'
    },
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
      maxWidth: '140px',
      maxHeight: '100px',
    },
    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      maxWidth: '100px',
      maxHeight: '80px',
    },
    [theme.breakpoints.down("vs")]: {
      display: 'flex',
      maxWidth: '70px',
      maxHeight: '50px',
    }
  },
  pentagramContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    justifyContent: 'center',
    display: 'flex',
    backgroundImage: `url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '102px',
    [theme.breakpoints.down("sm")]: {
      marginTop: '124px',
    }
  }
}))


const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} sx={{ flexDirection: 'row' }}>
        <div className={classes.pentagramContainer} >
          <img className={classes.penta} src={penta} alt='pentagram' />
        </div>
        <Header />
        <div className={classes.pentagramContainer}>
          <img className={classes.penta} src={penta} alt='pentagram' />
        </div>
      </AppBar>
      <main>
        <Paper className={classes.main}>
          <Routes>
            <Route path="jsRPG" element={<ProfileContent />} />
            <Route path="invertory" element={<InvertoryContent />} />
            <Route path="attributes" element={<AttributeContent />} />
            <Route path="skills" element={<SkillsContent />} />
            <Route path="map" element={<MapContent />} />
            <Route path="trade" element={<TradeContent />} />
          </Routes>
        </Paper>
      </main>
    </div>
  )
}


export default App
