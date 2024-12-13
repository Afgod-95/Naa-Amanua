import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar/NavBar'
import Home from './pages/Home'

function App() {
  

  return (
    <>
       <NavBar />
       <Home />
    </>
  )
}

export default App
