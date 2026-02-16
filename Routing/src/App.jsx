import './App.css'
import { Routes, Route, Outlet} from 'react-router-dom'
import Categories from './components/Categories'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category.jsx'
import CategoryLayout from './components/Categorylayout.jsx'


function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={< CategoryLayout/>} >
        <Route index element={<Categories/>}/>
          <Route path=':slug' element={<Category/>} />
        </Route>
        <Route path='about' element={<About />}/>
      </Routes>
    </Layout>
  )
}

export default App
