import { FC } from 'react'
import CartItem from '../cartItem/CartItem'
import './Cart.css'

interface CartProps {
  inCart: any[]
  removeInCart: any
  totalPrice: number
}

const Cart:FC<CartProps> = ({totalPrice, inCart, removeInCart}) => {
  return (
    <div>
      {/* Проверяем пуста ли корзина. Если нет, то выводим список товаров */}
      {inCart.length > 0
        ? <div className='cart-wrapper'>
            <div className='cart'>
              {inCart.map(item => 
                <CartItem key={item.id} removeInCart={removeInCart} item={item}/>
              )}
            </div>
            <div>
              <h2 className='cart__totalPrice'>Итого: {totalPrice} ₽</h2>
            </div>
          </div>
        : <h1 className='cart__empty'>Корзина пуста</h1>
      }
    </div>
    
  )
}

export default Cart