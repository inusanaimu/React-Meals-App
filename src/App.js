import { useState } from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShown, setCartIsShow] = useState(false)

  const toggleCart = () => {
    console.log(cartIsShown)
    setCartIsShow(!cartIsShown)
  }
  return (
    <div>
      {cartIsShown && <Cart onToggleCart={toggleCart} />}
      <Header onToggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </div>
  )
}

export default App
