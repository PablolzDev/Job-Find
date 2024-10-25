import React from 'react'
import Card from '../organisms/card/Card'
import { ICard, IJobs } from '../../types/card';
import styles from './cardList.module.scss'

interface Iprops {
    data: (ICard | IJobs)[];
}

export default function ListCard({ data }: Iprops) {
    return (
        <main className={styles.Main}>
            {data.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </main>

    )
}
