import '../atoms/Button.module.scss'
import React from 'react'
import ButtonS from '../atoms/button'
import styles from './swap.module.scss'

export default function SwapButtons() {
    return (
        <div className={styles.container} >
            <ButtonS title='Vacantes' className=''><p>Vacancies</p></ButtonS>
            <ButtonS title='Vacantes' className=''><p>Companies</p></ButtonS>
        </div>


    )
}
