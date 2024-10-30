"use client"
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PagText  from '../../atoms/Pag-text' ;
import styles from './Pagination.module.scss';
import { IVacancy } from '@/models/vacancie.model'
import { ICompany } from '@/models/company.model';
import { useRouter, useSearchParams } from 'next/navigation';


interface PaginationControlsProps {
    data: IVacancy | ICompany
    className?: string
}


export default function Pagination({ data, className = '' }: PaginationControlsProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage:number) => {

        const params = new URLSearchParams(searchParams.toString())
        params.set("page", newPage.toString());

        router.push(`?${params.toString()}`);
    }

    const currentPage = data.pageable.pageNumber+ 1;
    return (
        <div className={`${styles.container} ${className}`}>
            <button onClick={() => onPageChange(currentPage-1)} disabled={currentPage === 1 }  className={styles.button}>
                <ChevronLeft />
            </button>

            <PagText>
                Página {currentPage} de {data.totalPages}
            </PagText>

            <button onClick={() => onPageChange(currentPage+1)} disabled={currentPage === data.totalPages} className={styles.button}>
                <ChevronRight />
            </button>
        </div>
    );
};