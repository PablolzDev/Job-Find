import { Trash2 } from 'lucide-react';
import React from 'react'
import styles from "./Edit.module.scss"

export default function DeleteButton() {
    return (
        <div className={styles.iconContainer}>
            <Trash2 size={20} strokeWidth={1.5} className={styles.iconDelete} />
        </div>
    )
}
