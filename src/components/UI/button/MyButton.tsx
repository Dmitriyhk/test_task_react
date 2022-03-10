import React, { FC } from 'react'
import classes from './MyButton.module.css'

interface IButton {
  children: string
}

const MyButton: FC<IButton> = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  )
}

export default MyButton