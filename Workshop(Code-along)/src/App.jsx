import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Character from './pages/Character'
import Characters from './pages/Characters'
import Home from './pages/Home'
import Layout from './components/Layout'

function App() {


  return (
    <Layout>
      <Routes>
          <Route index element={<Home/> } />
          <Route path='/character/:id' element={<Character/>} />
          <Route path='/characters/' element={<Characters/>} />
      </Routes>
    </Layout>
  )
}

export default App
