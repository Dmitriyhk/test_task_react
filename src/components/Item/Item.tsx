import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../UI/button/MyButton'
import './Item.css'

interface Item {
  name: string
  id: number
  image: string
  price: number
}

interface ItemProps {
  item: Item
  key: number
  appendToCart(item: Item): void
}


const Item: FC<ItemProps> = ({item, appendToCart}) => {

  const [itemInCart, setItemInCart] = useState(false)
  // Если в localSrorage что-то есть, то проверям не совпадает ли айди с айди товара. Если да, то меняем кнопку на Оформить заказ.
  useEffect(()=> {
    if (localStorage.getItem('Item') && JSON.parse(localStorage.getItem('Item') || '').some((el:any) => el.id === item.id)) {
      setItemInCart(true)
      }
  }, [])

  const inCartHandler = () => {
    setItemInCart(true)
    appendToCart(item)
  }
  
  return (
    <div className='item'>
      <div className='item-wrapper'>
        <img className='item-wrapper__img' src={item.image} alt={item.name}/>
      </div>
        <h3  className='item__header'>{item.name}</h3>
        <div className='item-price'><span  className='item-price__value'>{item.price}₽</span>
        {itemInCart
          ? <Link to='/cart'><MyButton active={true} id={item.id} >Оформить заказ</MyButton></Link>
          : <MyButton id={item.id} onClick={inCartHandler}>Добавить в коризну</MyButton>
        }
      </div>
    </div>
  )
}

export default Item