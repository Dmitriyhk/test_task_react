import React, { FC } from 'react'
import CartItem from '../cartItem/CartItem'
import './Cart.css'

interface CartProps {
  inCart: any[]
  removeInCart: any
}

const Cart:FC<CartProps> = ({inCart, removeInCart}) => {
  return (
    <div className='cart-wrapper'><div className='cart'>{inCart.map(item => 
      <CartItem removeInCart={removeInCart} item={item}/>
      )}</div></div>
    
  )
}

export default Cart