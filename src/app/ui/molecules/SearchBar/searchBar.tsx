import React from 'react'
import styles from './search.module.scss'
import Input from '../../atoms/input'
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';



export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {  
    if (params.get("name")) {
      params.delete("name");
      router.replace(`?${params.toString()}`);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.set('name', e.currentTarget.value.toString());

    router.replace(`?${params.toString()}`);
  }

  return (
    <div className={styles.SearchInputContainer}>
     <Search className={styles.SearchIcon} /> <Input onChange={handleChange} type='search' name='' className={styles.SearchInput} placeholder='search'></Input>
    </div>
  )
}
