import { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './Store/CartProvider'

function App() {
  const [cartIsShown, setCartIsShow] = useState(false)

  const toggleCart = () => {
    console.log(cartIsShown)
    setCartIsShow(!cartIsShown)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onToggleCart={toggleCart} />}
      <Header onToggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
