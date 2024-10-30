import React from 'react'

interface InputProps {
    type:string;
    className?: string;
    placeholder: string;
    onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({type, className, placeholder, onChange}: InputProps) {
  return (
    <input onChange={onChange} type={type} className={className} placeholder={placeholder} />
  )
}
