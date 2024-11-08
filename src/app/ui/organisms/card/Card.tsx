'use client'
import React from 'react'
import styles from './Card.module.scss'
import { ContentCompany } from '@/models/company.model'
import { ContentVacancy } from '@/models/vacancie.model'
import ButtonsCard from '../../molecules/ButtonsCard/Buttons-Card'

interface UnifiedCardProps {
    data: ContentCompany | ContentVacancy;
    page: 'Vacante' | 'Company';
}

export default function Card({ data, page }: UnifiedCardProps) {
    const isJobCard = (data: ContentVacancy | ContentCompany): data is ContentVacancy => {
        return 'title' in data;
    };

    return (
        <div className={styles.card}>
            {isJobCard(data) ? (
                <>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.InfoContainer}>
                        <p className={styles.description}>{data.description}</p>
                        <p className={styles.status}>{data.status ? 'Active' : 'Inactive'}</p>
                        <p className={styles.companyName}>{data.company.name}</p>
                    </div>
                    <ButtonsCard 
                        page={page}
                        data={{
                            id: data.id.toString(),
                            name: data.company.name,
                            location: data.company.location,
                            contact: data.company.contact,
                            vacants: []
                        }}
                    />
                </>
            ) : (
                <>
                    <h2 className={styles.title}>{data.name}</h2>
                    <div className={styles.InfoContainer}>
                        <p className={styles.location}>Ciudad: {data.location}</p>
                        <p className={styles.contact}>Contacto: {data.contact}</p>
                    </div>
                    <ButtonsCard 
                        page={page}
                        data={data as ContentCompany}
                    />
                </>
            )}
        </div>
    );
}