export interface ItemState {
  items: any[]
  loading: boolean
  error: null | string
}

export enum ItemActionTypes {
FETCH_ITEMS = 'FETCH_ITEMS',
FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'
}

interface fetchItemsAction {
  type: ItemActionTypes.FETCH_ITEMS
}
interface fetchItemsSuccessAction {
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS
  payload: any[]
}
interface fetchItemsErrorAction {
  type: ItemActionTypes.FETCH_ITEMS_ERROR
  payload: string
}

export type ItemAction = fetchItemsAction | fetchItemsSuccessAction | fetchItemsErrorAction