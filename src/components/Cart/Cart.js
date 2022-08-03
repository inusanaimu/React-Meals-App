import React from 'react'

import classes from './Cart.module.css'

const Cart = () => {
  const cartItem = (
    <ul>
      {[{ id: 'c1', name: 'sushi', amount: '2', price: 12.99 }].map((item) => {
        return <li>{item.name}</li>
      })}
    </ul>
  )
  return (
    <div>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>65.88</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart
