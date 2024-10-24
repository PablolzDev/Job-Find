import React from 'react'
import Panel from '../organisms/panel/Panel'
import Header from '../organisms/headers/Header'

interface IProps {
  type?: "vacancies" | "companies";
}

export default function Adm({type = "vacancies"}: IProps) {
  return (
    <Panel>
      <Header label={ type === "vacancies" ? "Agregar vacante" : "Agregar compania"} />
    </Panel>
  )
}
