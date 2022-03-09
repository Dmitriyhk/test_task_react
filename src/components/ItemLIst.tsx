import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchItems } from '../store/action-creators/item';

const ItemLIst: FC = () => {
  const {error, items, loading} = useTypedSelector(state => state.item)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchItems)
  }, [])
  
  return (
    <div>ItemLIst</div>
  )
}

export default ItemLIst