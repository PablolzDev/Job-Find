import React from 'react';
import ListCard from '@/app/ui/templates/ListCard';
import { ApiService } from '@/services/api.service';
import style from './companies.module.scss'

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



const useApiService = new ApiService()
export default async function CompaniesPage({searchParams}: IProps ) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 6;
    const name = searchParams.name ? String(searchParams.name) : "";

    const data = await useApiService.findAll(`company?page=${page}&size=${size}&name=${name}`)
    return (
        <div className={style.container}>
            <ListCard data={data} />
        </div>
    );
}