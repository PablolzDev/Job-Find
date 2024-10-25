"use client"
import React from 'react'
import styles from './Card.module.scss'
import { ICard, IJobs } from '@/app/types/card'
import ButtonsCard from '../../molecules/ButtonsCard/Buttons-Card'

interface CardProps {
    data: ICard | IJobs;
}




export default function Card({ data }: CardProps) {
    const isJobCard = (data: ICard | IJobs): data is ICard => {
        return 'title' in data;
    };

    const renderContent = () => {
        if (isJobCard(data)) {
            return (
                <>
                    <h2>{data.title}</h2>
                    <div className={styles.InfoContainer}>
                        <p>{data.jobDescription}</p>
                        <p>{data.status ? 'Active' : 'Inactive'}</p>
                        <p>{data.company}</p>
                    </div>
                    <ButtonsCard/>
                </>
            );
        }

        return (
            <>
                <h2>{data.companies}</h2>
                <div className={styles.InfoContainer}>
                    <p>Ciudad: {data.city}</p>
                    <p>Contacto: {data.contact}</p>
                </div>
                <ButtonsCard/>
            </>
        );
    };

    return (
        <div className={styles.card}>
            {renderContent()}
        </div>
    );
}