import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Cart from './cart.svg'

export interface Item {
  name: string
  id: number
  image: string
  price: number
}

interface NavbarProps {
  totalPrice: number
  counter: number
}

const Navbar:FC<NavbarProps> = ({totalPrice, counter}) => {

  // useEffect(() => {
  //   console.log(inCart, 213113)
  
  //   // setTotal(.reduce((acc:number, el:any) => acc + el.price, 0))
  // }, [inCart])
    
    
  console.log(localStorage.getItem('Item'))


  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <a className='navbar-links__home' href='#'>Список товаров</a>
      </div>  
      <div className='navbar-cart'>
        <img className='navbar-cart__icon' src={Cart} alt="Cart" />
        {counter
        ? <div><span className='navbar-cart__counter'>{counter}</span></div>
        : <div></div> 
        }
        
        <span className='navbar-cart__text'>Сумма<br/>{totalPrice} ₽</span>
      </div>
    </div>
  )
}

export default Navbar