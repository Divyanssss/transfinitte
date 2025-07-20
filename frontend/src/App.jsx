import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Manager from './components/Manager'
import { Navbar } from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <Manager/>
     
    </>
  )
}

export default App
