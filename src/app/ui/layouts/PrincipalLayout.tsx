import React from 'react'
import Panel from '../organisms/panel/Panel'
import Header from '../organisms/headers/Header'

interface Iprops {
    children: React.ReactNode
}

export default function PrincipalLayout({children}: Iprops) {
  return (
    <Panel>
      <Header label='Panel Admin'/>
      {children}
    </Panel>
  )
}
