import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchItems } from '../store/action-creators/item';

const ItemLIst: FC = () => {
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
    <div>
      {items.map(item =>
        <div key={item.id}>{item.name}</div>  
      )}
    </div>
  )
}

export default ItemLIst