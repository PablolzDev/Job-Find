import React from 'react'
import EditCard from '../../atoms/Edit-card'
import DeleteButton from '../../atoms/Delete-button'
import styles from './buttonCard.module.scss'
import { ContentCompany } from '@/models/company.model';

interface IProps {
  page: string;
  data: ContentCompany;
}

export default function ButtonsCard({ page, data }: IProps) {
  return (
    <div className={styles.iconsFlex}>
      <EditCard />
      <DeleteButton idCard={data.id} page={page} />
    </div>
  );
}