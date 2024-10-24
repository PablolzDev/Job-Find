import React from 'react'
import SwapButtons from '../../molecules/SwapButtons/SwapButtons'
import SearchBar from '../../molecules/SearchBar/searchBar'
import styles from './Header.module.scss'
import ButtonM from '../../atoms/ButtonModal'
import { CirclePlus } from 'lucide-react';

interface IlabelProps {
    label: string
}

export default function Header({label} : IlabelProps) {
    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.Containerleft}>
                <SwapButtons />
                <SearchBar />
            </div>

            <div className={styles.ContainerRight}>
                <h2>Vacantes</h2>
                <ButtonM title='modal' className={styles.buttonRounded}>
                    <CirclePlus />
                    {label}
                </ButtonM>
            </div>
        </header>
    )
}
