import React from 'react'
import Card from '../organisms/card/Card'
import { ICompany } from '@/models/company.model';
import { IVacancy } from '@/models/vacancie.model';
import styles from './cardList.module.scss'
import Pagination from '../molecules/Pagination/Pagination';

interface Iprops {
    data: IVacancy | ICompany;
}

export default function ListCard({ data }: Iprops) {
    return (

        <div className={styles.container} >
            <main className={styles.Main}>
                {data.content.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </main>

            <Pagination currentPage={1} totalPages={2} className="mi-clase-adicional"/>
        </div>

    )
}
