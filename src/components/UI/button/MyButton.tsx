import { FC } from 'react'
import classes from './MyButton.module.css'

export interface IButton {
  children: string
  onClick?: any
  id: any
  active?: boolean
}

const MyButton: FC<IButton> = ({active, children, onClick, id}) => {
  return (
    <button id={id} onClick={onClick}  className={active ? classes.active : classes.myBtn}>
      {children}
    </button>
  )
}

export default MyButton