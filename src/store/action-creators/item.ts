import axios from "axios"
import { Dispatch } from "react"
import { ItemAction, ItemActionTypes } from "../../types/item"

export const fetchItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({type: ItemActionTypes.FETCH_ITEMS})
      const response = await axios.get('https://appevent.ru/dev/task1/catalog')
      console.log(response);
      dispatch({type: ItemActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data.items})
    } catch (error) {
      dispatch({type: ItemActionTypes.FETCH_ITEMS_ERROR, payload: "Произошла ошибка при загрузке данных."})
    }
  }
}