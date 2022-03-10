import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchItems } from '../../store/action-creators/item';
import Item from '../Item/Item';
import './ItemList.css'

interface ItemListProps {
  appendToCart(item: any, quantity?: number): void
}

const ItemLIst: FC<ItemListProps> = ({appendToCart}) => {

  console.log()
  const {error, items, loading} = useTypedSelector(state => state.item)
  const {fetchItems} = useActions()
  useEffect(() => {
    fetchItems()
  }, [])
  
  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div className='itemList-wrapper'> <div className='itemList'>
    {items.map(item =>
      <Item appendToCart={appendToCart} key={item.id} item={item}/>
    )}
  </div></div>
   
  )
}

export default ItemLIst