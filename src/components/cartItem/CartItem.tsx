import React, { FC } from 'react'
import { Item } from '../../types/item'
import MyButton from '../UI/button/MyButton'
import './CartIrem.css'

interface CartItem {
  item: Item
  removeInCart: any
  key: number
}


const CartItem:FC<CartItem> = ({item, removeInCart}) => {
  return (
    <div className='cartItem'>
      <div className='cartItem-wrapper'>
        <img className='cartItem-wrapper__img' src={item.image} alt={item.name}/>
      </div>
      <h3  className='cartItem__header'>{item.name}</h3>
      <div className='cartItem-price'>
        <span className='cartItem-price__value'>{item.price}₽</span>
        <MyButton id={item.id} onClick={() => removeInCart(item)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default CartItem