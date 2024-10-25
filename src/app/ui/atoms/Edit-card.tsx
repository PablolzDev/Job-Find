import { Pencil } from 'lucide-react';
import React from 'react'
import styles from "./Edit.module.scss"

export default function EditCard() {
    return (
        <div className={styles.iconContainer}>
            <Pencil size={20} strokeWidth={1.5} className={styles.iconStyles} />
        </div>
    )
}
