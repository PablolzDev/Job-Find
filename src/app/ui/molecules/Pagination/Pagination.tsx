import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PagText  from '../../atoms/pagText/pag-text';
import styles from './Pagination.module.scss';

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    className?: string;
}

export default function Pagination({ currentPage, totalPages, className = '' }: PaginationControlsProps) {
    return (
        <div className={`${styles.container} ${className}`}>
            <button className={styles.button}>
                <ChevronLeft />
            </button>

            <PagText>
                Página {currentPage} de {totalPages}
            </PagText>

            <button className={styles.button}>
                <ChevronRight />
            </button>
        </div>
    );
};