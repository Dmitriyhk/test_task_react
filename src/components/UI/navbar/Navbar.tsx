import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Cart from './cart.svg'


const Navbar:FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <a className='navbar-links__home' href='#'>Список товаров</a>
      </div>  
      <div className='navbar-cart'>
        <img className='navbar-cart__icon' src={Cart} alt="Cart" />
        <div><span className='navbar-cart__counter'>9</span></div>
        <span className='navbar-cart__text'>В корзине нет товаров</span>
      </div>
    </div>
  )
}

export default Navbar