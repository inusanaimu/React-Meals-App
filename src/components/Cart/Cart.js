import React from 'react'

import Modal from '../UI/Modal'

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
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>65.88</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
