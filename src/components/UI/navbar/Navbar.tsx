import { FC } from 'react'
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
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <Link className='navbar-links__home' to='/'>Каталог</Link>
      </div>  
      <Link className='navbar-links__home' to='/cart'>
        <div className='navbar-cart'>
          <img className='navbar-cart__icon' src={Cart} alt="Cart" />
          {counter
            ? <div>
                <span className='navbar-cart__counter'>{counter}</span>
                <span className='navbar-cart__text'>Сумма<br/>{totalPrice} ₽</span>
              </div>
            : <div className='navbar-cart__text'><span>В корзине нет товаров</span></div> 
          }
        </div>
      </Link>
    </div>
  )
}

export default Navbar