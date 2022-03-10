import React, { FC } from 'react'
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
}

const Item: FC<ItemProps> = ({item}) => {
  return (
    <div className='item'>
      <div className='item-wrapper'>
      <img className='item-wrapper__img' src={item.image} alt={item.name}/>
      </div>
        <h3  className='item__header'>{item.name}</h3>
        <div className='item-price'><span  className='item-price__value'>{item.price}₽</span>
        <MyButton>Добавить в коризну</MyButton>
        </div>
    </div>
  )
}

export default Item