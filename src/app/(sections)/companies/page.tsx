import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import {ICard} from '../../types/card'

interface IProps {
    data?: ICard[];
}


const JOBS_DATA: ICard[] = [
    {
        title: 'Portfolio',
        jobDescription: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        status: false,
        company: "globant"
    },
    {
        title: 'Portfolio',
        jobDescription: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        status: false,
        company: "globant"
    },
    {
        title: 'Portfolio',
        jobDescription: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        status: false,
        company: "globant"
    },
    {
        title: 'Portfolio',
        jobDescription: 'At Parcham Organization, I proudly coached aspiring football players, fostering resilience and teamwork while instilling a sense of social responsibility. Witnessing their growth on and off the field was a truly rewarding experience, empowering them to dream big and create positive change.',
        status: false,
        company: "globant"
    },
];

export default function CompaniesPage({ data = JOBS_DATA }: IProps) {
    return (
        <div>
            <ListCard data={data} />
        </div>
    );
}