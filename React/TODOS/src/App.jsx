import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import './style/todocard.scss'
import './style/layout.scss'
import AddToDo from './components/AddToDo'

function App() {
        const todoItems = [
          {
              id: 0,
              title: "Gå på butikken",
              content: "Hanlde spagetti og dorull"
          },
          {
              id: 1,
              title: "Skrive emnerapport",
              content: "Gå igjennom statestikk og skrive rapport og tilbakemelding"
          },
          {
              id: 2,
              title: "Kjøpe kattemat",
              content: "Kjøpe ny slankefôr..."
          }

    ]

const [todoList, setToDoList]= useState(todoItems)
const [todo, setTodo] = useState()



  return (
    <main>
      <h1>Todo app</h1>
      <AddToDo todo={todo} setTodo={setTodo} setToDoList={setToDoList} />
      <Todos todoItems={todoList} setToDoList={setToDoList}/>
    </main>
  )
}

export default App
