import React, { FC } from 'react'
import classes from './MyButton.module.css'

export interface IButton {
  children: string
  onClick?: any
  id: any
}

const MyButton: FC<IButton> = ({children, onClick, id}) => {
  return (
    <button id={id} onClick={onClick} className={classes.myBtn}>
      {children}
    </button>
  )
}

export default MyButton