import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import { ApiService } from '@/services/api.service';
import style from '../companies/companies.module.scss'

const useApiService = new ApiService()

export default async function Page() {

    const data = await useApiService.findAll(`vacants?`)
    return (
        <div className={style.container}>
            
            <ListCard data={data} />
        </div>
    );
}