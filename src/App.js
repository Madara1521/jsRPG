import React from "react"
import Header from './Components/Header/Header'
import ProfileContent from "./Components/Content/ProfileContent/ProfileContent"
import AppBar from '@mui/material/AppBar'
import { Route, Routes } from "react-router-dom"
import InvertoryContent from "./Components/Content/InventoryContent/InvertoryContent"
import AttributeContent from "./Components/Content/AttributesContent/AttributesContent"
import SkillsContent from "./Components/Content/SkillsContent/SkillsContent"
import MapContent from "./Components/Content/MapContent/MapContent"
import TradeContent from "./Components/Content/TradeContent/TradeContent"


const App = () => {

  return (
    <AppBar position='fixed' style={{ height: '100vh' }} color="inherit">
      <Header />
      <Routes>
        <Route path="/" element={<ProfileContent />}/>
        <Route path="invertory" element={<InvertoryContent />}/>
        <Route path="attributes" element={<AttributeContent/>}/>
        <Route path="skills" element={<SkillsContent />}/>
        <Route path="map" element={<MapContent />}/>
        <Route path="trade" element={<TradeContent />}/>
      </Routes>
    </AppBar >
  )
}

export default App
