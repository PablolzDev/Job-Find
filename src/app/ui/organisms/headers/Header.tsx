"use client"
import React, { useState } from 'react'
import SwapButtons from '../../molecules/SwapButtons/SwapButtons'
import SearchBar from '../../molecules/SearchBar/searchBar'
import styles from './Header.module.scss'
import ButtonM from '../../atoms/ButtonModal'
import { CirclePlus } from 'lucide-react';
import { usePathname } from 'next/navigation'
import FormV from '../FormV/FormV'

interface IProps {
    addButtonLabel: string;
    titlePrimary: string;
    type: string;
}




export default function Header(addButtonLabel, titlePrimary, type): IProps {
    const currentPath = usePathname()

    const [openModal, setOpenModal] = useState(false)

    function handleOpen() {
        if (type === "Vacantes") {
            setOpenModal(true);
            return;
        }
        setOpenModal(false);

    };


    setOpenModal(true)
    console.log("funciona")



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
                <ButtonM onClick={handleOpen} title='modal' className={styles.buttonRounded}>
                    <CirclePlus />
                    {currentPath === '/vacancies'
                        ? 'Add Vacancie'
                        : 'Add Companie'}

                </ButtonM>

            </div>

            {openModal === true && (
                <FormV
                    onClose={() => setOpenModal(false)}
                    titlePrimary="Agregar Vacante"
                    editButtonLabel="Agregar"
                />
            )}
           
        </header>
    )

}