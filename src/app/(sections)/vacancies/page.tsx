import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import {ICard} from '../../types/card'
import style from '../companies/companies.module.scss'


interface IProps {
    data?: ICard[];
}


const companies_Data: ICard[] = [
    {
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    },
    {
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    },
    {
        
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    },
    {

        
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    },
    {
        
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    },
    {
        
        title: "Desarrollador Frontend",
        jobDescription: 'Se busca desarrollador con experiencia en React',
        status: true,
        company: "TechCorp"
    }
];

export default function Page({ data = companies_Data }: IProps) {
    return (
        <div className={style.container}>
            
            <ListCard data={data} />
        </div>
    );
}