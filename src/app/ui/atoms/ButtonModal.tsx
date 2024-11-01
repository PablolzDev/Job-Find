import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Ibuttonprops {
    title: string
    className?: string
    children: ReactNode
    onClick?: () => void;
}

export default function ButtonM({title, className, children, onClick}: Ibuttonprops) {
  return (
    <button title={title} onClick={onClick}  className={`${styles.button} ${className}`} >{children}</button>
  )
}
