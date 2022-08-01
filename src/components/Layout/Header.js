import React from 'react'

import mealsImage from '../../asserts/meals.jpg'
import classess from './Header.module.css'
function Header(props) {
  return (
    <>
      <header className={classess.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classess['main-image']}>
        <img src={mealsImage} alt='A table full of delicioud foods' />
      </div>
    </>
  )
}

export default Header
