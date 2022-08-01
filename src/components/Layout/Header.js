import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../asserts/meals.jpg'
import classess from './Header.module.css'

function Header(props) {
  return (
    <>
      <header className={classess.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classess['main-image']}>
        <img src={mealsImage} alt='A table full of delicioud foods' />
      </div>
    </>
  )
}

export default Header
