"use client"
import React, { useEffect, useState } from 'react'
import PecasLista, { pecasTipo } from '../PecasLista/PecasLista';
import { consertoTipo } from '@/app/api/conserto/[idUser]/route';
import DropDownConserto from './DropDownConserto/DropDownConserto';




export default function Consertos() {
    
    const [user, setUser] = useState<any>(null);

    const [conserto, setConserto] = useState<consertoTipo>();
    const [consertosList, setConsertosList] = useState<consertoTipo[]>([]);


    useEffect(() => {

        const userString = sessionStorage.getItem("User");
        if (userString) {
            setUser(JSON.parse(userString));
        }
    }, []);
    
    const changeConserto = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        const selectedConserto = consertosList.find(conserto => conserto.id_conserto === selectedId);
        if (selectedConserto) {
            setConserto(selectedConserto);
        }
    };

    useEffect(()=>{

        const chamadaApi = async ()=>{
            const consertosUser = await fetch(`api/consertos/${user.idUser}`)
            const resultadoConserto: consertoTipo[]  = await consertosUser.json()

            setConsertosList(resultadoConserto);

        }
        chamadaApi();

        
    },[conserto])



  return (
    <div>
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col carros-container">
            <DropDownConserto label='Consertos' consertos={consertosList} onChange={changeConserto}></DropDownConserto>
            <h1>Diagnostico: {conserto!.ds_conserto}</h1>
            <PecasLista idUser={conserto!.id_usuario} idConserto={conserto!.id_conserto}></PecasLista>
        </div>
    </div>
  )
}
