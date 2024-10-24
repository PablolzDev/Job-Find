"use client"
import styles from './swap.module.scss';
import React, { useState } from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import ButtonS from '../../atoms/Button';
import { useRouter } from 'next/navigation';

export default function SwapButtons() {
    const [activeButton, setActiveButton] = useState('vacancies');
    const router = useRouter()

    const HandleChange =(type:string) => {
        setActiveButton(type)

        if(type == 'vacancies') {
            router.push('/vacancies')
        }
        else {
            router.push('/companies')
        }
    }
    return (
        <div className={styles.container}>
            <ButtonS title='vacancies' className={activeButton === 'vacancies' ? 'active-vacancies' : ''} onClick={ () => HandleChange('vacancies') }  >
                <Briefcase strokeWidth={1.25} />  Vacancies
            </ButtonS>
            <ButtonS title='Companies' className={activeButton === 'companies' ? 'active-companies' : ''} onClick={ () => HandleChange('companies') }>
                <Building2 strokeWidth={1.25} />  Companies
            </ButtonS>
        </div>
    );
}