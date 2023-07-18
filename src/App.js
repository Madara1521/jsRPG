import React from "react"
import Header from './Components/Header/Header'
import ProfileContent from "./Components/Content/ProfileContent/ProfileContent"
import { Route, Routes } from "react-router-dom"
import InvertoryContent from "./Components/Content/InventoryContent/InvertoryContent"
import AttributeContent from "./Components/Content/AttributesContent/AttributesContent"
import SkillsContent from "./Components/Content/SkillsContent/SkillsContent"
import MapContent from "./Components/Content/MapContent/MapContent"
import TradeContent from "./Components/Content/TradeContent/TradeContent"
import { Paper, Container, AppBar } from '@mui/material'
import { makeStyles } from "@mui/styles"
import ImgHeader from './Components/Header/diabloHeder.png'
import penta from './Components/Header/penta.png'
import mainImg from './Components/Content/img/fon.png'

const useStyles = makeStyles({
  appBar: {
    display: 'flex !important',
    flexDirection: 'row !important',
    justifyContent: 'center',
    backgroundImage: `url(${ImgHeader})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  penta: {
    display: 'flex',
    maxWidth: '150px',
    maxHeight: '100px',
  },
  main: {
    display: 'flex',
    backgroundImage: `url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '102px',
  }
})


const App = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <img className={classes.penta} src={penta} alt='penta' />
        <Container fixed className={classes.container}>
          <Header />
        </Container>
        <img className={classes.penta} src={penta} alt='penta' />
      </AppBar>
      <main>
        <Paper className={classes.main}>
          <Container fixed>
            <Routes>
              <Route path="/" element={<ProfileContent />} />
              <Route path="invertory" element={<InvertoryContent />} />
              <Route path="attributes" element={<AttributeContent />} />
              <Route path="skills" element={<SkillsContent />} />
              <Route path="map" element={<MapContent />} />
              <Route path="trade" element={<TradeContent />} />
            </Routes>
          </Container>
        </Paper>
      </main>
    </>
  )
}

export default App
