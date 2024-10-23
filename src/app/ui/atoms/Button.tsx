import React, { ReactNode } from 'react'

interface Ibuttonprops {
    title: string
    className?: string
    children: ReactNode
}

export default function ButtonS({title, className, children}: Ibuttonprops) {
  return (
    <button title={title} className={className}>{children}</button>
  )
}
