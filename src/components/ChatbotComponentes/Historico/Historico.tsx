"use client"
import {faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SidebarHistorico from "./SideBarHistorico/SideBarHistorico"
import { useState } from "react"

export type HistoricoProps = {
  clicked? : boolean
} 

const Historico = ({clicked} : HistoricoProps) => {
  const [viewHistory, setViewHistory] = useState(false)
  const toggleViewHistory = () => {
    setViewHistory(!viewHistory)
  } 
  return (
    <div className={`  bg-primary static max-w-xs  p-0 flex flex-col h-[80vh] ${clicked ? 'celular:w-screen celular:max-w-none' : ''}`} >
        <FontAwesomeIcon onClick={toggleViewHistory} className="celular:hidden cursor-pointer hover:scale-105 transition-all duration-300 mb-4 p-4 justify-self-start text-start" color="#fff" size="2xl" icon={faBars}  />
        <SidebarHistorico  view={viewHistory || clicked!} />
    </div>

  )
}

export default Historico