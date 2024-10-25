import React from 'react'
import EditCard from '../../atoms/Edit-card'
import DeleteButton from '../../atoms/Delete-button'
import styles from './buttonCard.module.scss'

export default function ButtonsCard() {
  return (
    <div className={styles.iconsFlex}>
        <EditCard />
        <DeleteButton />
    </div>
  )
}
