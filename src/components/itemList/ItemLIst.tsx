import { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Item from '../Item/Item';
import './ItemList.css'

interface ItemListProps {
  appendToCart(item: any, quantity?: number): void
}

const ItemLIst: FC<ItemListProps> = ({appendToCart}) => {
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
    <div className='itemList-wrapper'> 
      <div className='itemList'>
        {items.map(item =>
          <Item appendToCart={appendToCart} key={item.id} item={item}/>
        )}
      </div>
    </div>
  )
}

export default ItemLIst