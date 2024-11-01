import styles from "./Title.module.scss"

interface IProps {
  children: React.ReactNode
  
}

export default function TitlePrimary({ children }: IProps) {
  return (
    <h2 className={styles.Title}>{children}</h2>
  )
}