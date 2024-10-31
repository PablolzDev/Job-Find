import React from 'react'

interface InputProps {
    type:string;
    className?: string;
    placeholder: string;
    required?: boolean;
    onChange: (e:  React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({type, className,required, placeholder, onChange}: InputProps) {
  return (
    <input onChange={onChange} required={required} type={type} className={className} placeholder={placeholder} />
  )
}
