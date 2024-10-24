import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Ibuttonprops {
    title: string
    className?: string
    children: ReactNode
    onClick?: ()=> void;
}

export default function ButtonS({title, className, children, onClick}: Ibuttonprops) {
  return (
    <button title={title}  className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
  )
}
