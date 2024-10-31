import { X } from 'lucide-react';
import styles from "./ModalContainer.module.scss";
import { CircleArrowUp } from 'lucide-react';

interface IProps {
    children: React.ReactNode;
    onClose: () => void
}

export default function ModalContainer({ children, onClose }: IProps) {
    return (
        <div className={styles.Container}>
            <div className={styles.Modal}>
                <div className={styles.ContainerIcon}>
                    <CircleArrowUp className={styles.Icon} onClick={onClose}>
                        <X />
                    </CircleArrowUp>
                </div>
                {children}
            </div>
        </div>
    );
}