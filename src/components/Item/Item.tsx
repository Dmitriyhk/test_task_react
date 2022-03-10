import React, { FC, useEffect, useState } from 'react'
import MyButton from '../UI/button/MyButton'
import './Item.css'
export interface Item {
  name: string
  id: number
  image: string
  price: number
}

interface ItemProps {
  item: Item
  key: number
  appendToCart(item: any, quantity?: number): void
}


const Item: FC<ItemProps> = ({item, appendToCart}) => {
  const [test1, setTest1] = useState(false)
  useEffect(()=> {
    if (localStorage.getItem('Item') && JSON.parse(localStorage.getItem('Item') || '').some((el:any) => el.id === item.id)) {
      setTest1(true)
      }
  }, [])

  const test = () => {
    setTest1(true)
    appendToCart(item)
  }
  

  return (
    <div className='item'>
      <div className='item-wrapper'>
      <img className='item-wrapper__img' src={item.image} alt={item.name}/>
      </div>
        <h3  className='item__header'>{item.name}</h3>
        <div className='item-price'><span  className='item-price__value'>{item.price}₽</span>
        {test1
        ? <MyButton id={item.id} >Перейти в корзину</MyButton>
        : <MyButton id={item.id} onClick={test}>Добавить в коризну</MyButton>
        }
        </div>
    </div>
  )
}

export default Item