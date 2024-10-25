import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import {IJobs} from '../../types/card'
import style from '../companies/companies.module.scss'


interface IProps {
    data?: IJobs[];
}


const companies_Data: IJobs[] = [
    {
        companies: "TechCorp",
        city: 'ciuda de mexico',
        contact: '555-0101'
        
    },
    {
        companies: "TechCorp",
        city: 'ciuda de mexico',
        contact: '555-0101'
    },
    {
        companies: "TechCorp",
        city: 'ciuda de mexico',
        contact: '555-0101'
    },
    {
        companies: "TechCorp",
        city: 'ciuda de mexico',
        contact: '555-0101'
    },
    {
        companies: "TechCorp",
        city: 'ciuda de mexico',
        contact: '555-0101'
    }
];

export default function Page({ data = companies_Data }: IProps) {
    return (
        <div className={style.container}>
            <ListCard data={data} />
        </div>
    );
}