import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {

  const titles = ["Kategorier", "Om oss", "Produkter"]

  return (
  <main>
    
    {titles.map((item, i) => <Title key={i} title={item}/>)}

    <Title title="Mitt første react prosjekt!" />
    <h2> Skyt meg </h2>

  </main>
  )
}

export default App
