import React from 'react'
import styles from './PagText.module.scss'

interface Iprops {
    className?: string;
    children: React.ReactNode;
}

export default function PagText({className, children}: Iprops) {
  return (
    <p className={`${styles.text} ${className}`}>{children}</p>
  )
}
