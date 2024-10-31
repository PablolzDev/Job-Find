import React from 'react'
import Card from '../organisms/card/Card'
import { ICompany } from '@/models/company.model';
import { IVacancy } from '@/models/vacancie.model';
import styles from './cardList.module.scss'
import Pagination from '../molecules/Pagination/Pagination';

interface Iprops {
    data: IVacancy | ICompany;
    page: 'Vacante' | 'Company';

}

export default function ListCard({ data, page }: Iprops) {
    return (

        <div className={styles.container} >
            <main className={styles.Main}>
                {data.content.map((item, index) => (
                    <Card key={index} data={item}  page={page}/>
                ))}
            </main>

            <Pagination data={data} className="mi-clase-adicional"/>
        </div>

    )
}
