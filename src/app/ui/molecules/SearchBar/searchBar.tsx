import React from 'react'
import styles from './search.module.scss'
import Input from '../../atoms/input'
import { Search } from 'lucide-react';


export default function SearchBar() {
  return (
    <div className={styles.SearchInputContainer}>
     <Search className={styles.SearchIcon} /> <Input type='search' className={styles.SearchInput} placeholder='search'></Input>
    </div>
  )
}
