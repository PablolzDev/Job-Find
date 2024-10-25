"use client"
import React from 'react'
import SwapButtons from '../../molecules/SwapButtons/SwapButtons'
import SearchBar from '../../molecules/SearchBar/searchBar'
import styles from './Header.module.scss'
import ButtonM from '../../atoms/ButtonModal'
import { CirclePlus } from 'lucide-react';
import { usePathname } from 'next/navigation'





export default function Header() {
    const currentPath = usePathname()


    return (
        <header className={styles.HeaderContainer}>
            <div className={styles.Containerleft}>
                <SwapButtons />
                <SearchBar />
            </div>

            <div className={styles.ContainerRight}>
                <h2> {currentPath === '/vacancies' 
                        ? 'Vacancies' 
                        : 'Companies'}</h2>
                <ButtonM title='modal' className={styles.buttonRounded}>
                    <CirclePlus />
                    {currentPath === '/vacancies' 
                        ? 'Add Vacancie' 
                        : 'Add Companie'}
             
                </ButtonM>
            </div>
        </header>
    )
}
