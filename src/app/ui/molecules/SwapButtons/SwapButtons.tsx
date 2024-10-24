"use client"
import styles from './swap.module.scss';
import React, { useState } from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import ButtonS from '../../atoms/Button';

export default function SwapButtons() {
    const [activeButton, setActiveButton] = useState('vacancies');

    return (
        <div className={styles.container}>
            <ButtonS title='Vacantes' className={activeButton === 'vacancies' ? 'active-vacancies' : ''} onClick={() => setActiveButton('vacancies')} >
                <Briefcase strokeWidth={1.25} />  Vacancies
            </ButtonS>
            <ButtonS title='Companies' className={activeButton === 'companies' ? 'active-companies' : ''} onClick={() => setActiveButton('companies')}>
                <Building2 strokeWidth={1.25} />  Companies
            </ButtonS>
        </div>
    );
}