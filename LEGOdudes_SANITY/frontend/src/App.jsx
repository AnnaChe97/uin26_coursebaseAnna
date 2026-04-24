import './styles/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import Layout from './components/layout'
import {Routes, Route} from 'react-router-dom'
import CategoryPage from './components/categorypage'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)


console.log("Cart", cart)

  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartQuantity (totalQuantity)
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    setTotalSum(total)
  }, [cart])

  function Page(){
    return(
      <div id="container">
        <main>
          <CategoryTitle/>
          <Products products={products} setCart={setCart}/>
        </main>
      </div>
    )
  }


  console.log("Cart", cart)

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page/>} />
        <Route path="/kategori/:slug"element={<CategoryPage />} />
      </Routes>
    </Layout>
  )
}

export default App
