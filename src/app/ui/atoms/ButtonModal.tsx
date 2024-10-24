import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Ibuttonprops {
    title: string
    className?: string
    children: ReactNode
}

export default function ButtonM({title, className, children}: Ibuttonprops) {
  return (
    <button title={title}  className={`${styles.button} ${className}`} >{children}</button>
  )
}
