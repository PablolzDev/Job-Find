"use client"
import React from 'react'
import styles from './Card.module.scss'
import { ICard } from '@/app/types/card'



export default function Card({ title, jobDescription, status, company }: ICard) {
    return (
        <div className={styles.card}>Card

            <h2>{title}</h2>

            <div className={styles.InfoContainer}>
                <p>{jobDescription}</p>
                <p>{status ? 'Active' : 'Inactive'}</p>
                <p>{company}</p>
            </div>

        </div>
    )
}
