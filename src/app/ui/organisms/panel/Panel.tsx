import React, { ReactNode } from 'react'
import styles from './Panel.module.scss'

interface IPanelprops {
    children: ReactNode
}

export default function PanelAdmin({children}: IPanelprops ) {
  return (
    <div className={styles.Panel}>
        <h1>Panel de Administracion</h1>
        {children}
    </div>
  )
}
