import { Trash2 } from 'lucide-react';
import React from 'react'
import styles from "./Edit.module.scss"
import { ApiService } from '@/services/api.service';
import { useRouter } from 'next/navigation';


interface Iprops {
    page: string,
    idCard: string,
   
}

const useService = new ApiService();

export default function DeleteButton({page, idCard, }: Iprops) {
    const router = useRouter();

    const handleDelete = async()=> {
        if(page === 'Vacante'){
          await useService.destroy(`vacants`,idCard);
        }else{
          await useService.destroy(`company`,idCard);
        }
        router.refresh();
      }

    return (
        <button onClick={handleDelete} className={styles.iconContainer}>
            <Trash2 size={20} strokeWidth={1.5} className={styles.iconDelete} />
        </button>
    )
}
