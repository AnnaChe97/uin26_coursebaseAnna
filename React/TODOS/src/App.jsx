import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import './style/todocard.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Todo app</h1>
      <Todos ToDos/>
    </main>
  )
}

export default App
