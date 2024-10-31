import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import { ApiService } from '@/services/api.service';
import style from '../companies/companies.module.scss'

const useApiService = new ApiService()

interface IProps {
    searchParams : {
      page: string;
      size:string;
      name:string;
    }
  }
  
  export const generateMetadata = async ({searchParams}:IProps) => {
    const page = searchParams.page ?? 1;
    return { 
      title: `Vacantes - Página ${page}`,
      description: 'Gestion de vacantes'
    }
  }

export default async function Page({searchParams}: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;

    const data = await useApiService.findAll(`vacants?page=${page}&size=${size}`)
    console.log(page, size)
    return (
        <div className={style.container}>
            
            <ListCard page="Vacante" data={data} />
        </div>
    );
}