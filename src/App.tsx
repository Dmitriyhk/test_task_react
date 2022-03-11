import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/cart/Cart'
import ItemLIst from './components/itemList/ItemLIst'
import Navbar from './components/UI/navbar/Navbar'
import './styles/App.css'
import { Item } from './types/item'

const App = () => {

  const [inCart, setInCart] = useState<Item[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [counter, setCounter] = useState<number>(0)

  // Если в localstorage что-то есть, то закидываем в inCart его содержимое в виде массива
  useEffect(() => {
    if (localStorage.getItem('Item')) {
      setInCart(JSON.parse(localStorage.getItem('Item') || ''))
    }
  }, [])
  // Считаем и выводим содержимое корзины
  useEffect(() => {
    localStorage.setItem('Item', JSON.stringify(inCart))
    setTotalPrice(inCart.reduce((acc: number, el:Item) => acc + el.price, 0))
    setCounter(inCart.length)
  }, [inCart])
  
  function appendToCart(item:Item) {
    setInCart([...inCart, item])
  }

  function removeInCart(item:Item) {
    const itemIndex = inCart.findIndex(value => value.id === item.id)
    const newCart = inCart.slice()
    newCart.splice(itemIndex, 1)
    setInCart(newCart)
  }

  return (
    <BrowserRouter>
      <Navbar counter={counter} totalPrice={totalPrice}/>
      <Routes>
        <Route path={'/'} element={<ItemLIst appendToCart={appendToCart}/>}>
        </Route>
        <Route path={'/cart'} element={<Cart totalPrice={totalPrice} removeInCart={removeInCart} inCart={inCart}/>}>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App