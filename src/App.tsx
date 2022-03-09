import React from 'react'
import { Route, Router } from 'react-router-dom'
import ItemLIst from './components/itemList/ItemLIst'
import Navbar from './components/UI/navbar/Navbar'
import './styles/App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemLIst/>
    </div>
  )
}

export default App