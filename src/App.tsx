import React, { useEffect, useState } from 'react'
import { Route, Router } from 'react-router-dom'
import Cart from './components/cart/Cart'
import ItemLIst from './components/itemList/ItemLIst'
import Navbar from './components/UI/navbar/Navbar'
import './styles/App.css'


const App = () => {
  const [inCart, setInCart] = useState<any[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [counter, setCounter] = useState<number>(0)
  useEffect(() => {
    if (localStorage.getItem('Item')) {
      setInCart(JSON.parse(localStorage.getItem('Item') || ''))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('Item', JSON.stringify(inCart))
    setTotalPrice(inCart.reduce((acc: number, el:any) => acc + el.price, 0))
    setCounter(inCart.length)
  }, [inCart])
  function appendToCart(item:any, quantity:number = 1) {
    const itemIndex = inCart.findIndex(value => value.id === item.id)
    if (itemIndex < 0) {
      const newItem = {...item, quantity: quantity}
      setInCart([...inCart, newItem])
    } else {
      const newItem = {
        ...inCart[itemIndex], quantity: inCart[itemIndex].quantity + quantity
      }
      const newCart = inCart.slice()
      newCart.splice(itemIndex, 1, newItem)
      setInCart(newCart)
    }
  }

  function removeInCart(item:any) {
    const itemIndex = inCart.findIndex(value => value.id === item.id)
    const newCart = inCart.slice()
    newCart.splice(itemIndex, 1)
    setInCart(newCart)
  }


  return (
    <div>
      <Navbar counter={counter} totalPrice={totalPrice}/>
      <ItemLIst appendToCart={appendToCart}/>
      <Cart removeInCart={removeInCart} inCart={inCart}/>
    </div>
  )
}

export default App