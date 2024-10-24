import React from 'react'
import Card from '../organisms/card/Card'
import { ICard } from '../../types/card'

interface Iprops {
    data: ICard[];
}

export default function ListCard({ data }: Iprops) {
    return (
        <main>
            {data.map((job, index) => (
                <Card key={index} {...job} />
            ))}

        </main>

    )
}
