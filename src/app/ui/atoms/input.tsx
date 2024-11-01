import React from 'react'

interface InputProps {
    type?:string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export default function Input({type, className,required, placeholder, onChange, name}: InputProps) {
  return (
    <input name={name} onChange={onChange} required={required} type={type} className={className} placeholder={placeholder} />
  )
}
