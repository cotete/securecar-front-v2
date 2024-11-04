"use client"
import React, { useEffect, useState } from 'react'
import PecasLista from '../PecasLista/PecasLista';
import { consertoTipo } from '@/app/api/conserto/[idUser]/route';
import DropDownConserto from './DropDownConserto/DropDownConserto';
import { Usuario } from '@/app/login/page';




export default function Consertos() {
    
    const [user, setUser] = useState<Usuario>({
        nomeUsuario: "",
        senha: "",
        cpf: "",
        genero: "",
        rg: "",
        idEndereco: 0,
        idContato: 0,
        idUsuario: 0
    });

    const [conserto, setConserto] = useState<consertoTipo>({
        idConserto: 0, 
        dataConserto: new Date(), 
        descricaoConserto: "", 
        valorConserto: "0.00", 
        idUsuario: 0, 
      });
    const [consertosList, setConsertosList] = useState<consertoTipo[]>([
        {
            idConserto: 0, 
            dataConserto: new Date(), 
            descricaoConserto: "", 
            valorConserto: "0.00", 
            idUsuario: 0, 
          }
    ]);

    const ApiUser =async (id:number) =>{
        try{
            const res = await fetch(`http://localhost:8080/usuario/${id}`)
            if(res.ok){
                const data :Usuario = await res.json()
                console.log(data)
                return data
            }
        }catch{

        }
    }

    useEffect(() => {

        const chamadaUser = async () => {
            try {
                const userString = sessionStorage.getItem("user");
                if (userString) {
                    const parsedUser :Usuario = await JSON.parse(userString);
                    const user = await ApiUser(parsedUser.idUsuario!)
                    if(user){
                        setUser(user);

                    }
                }
            } catch {
                console.log("Erro")
            }
        }
        chamadaUser()
    }, []);
    
    const changeConserto = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        const selectedConserto = consertosList.find(conserto => conserto.idConserto === selectedId);
        if (selectedConserto) {
            setConserto(selectedConserto);
        }
    };

    useEffect(() => {
        const chamadaApi = async () => {
          if (user.idUsuario !== 0) { // Certifica-se de que o user foi carregado
            try {
              const consertosUser = await fetch(`http://localhost:8080/conserto/listar?id_usuario=${user.idUsuario}`);
              const resultadoConserto: consertoTipo[] = await consertosUser.json();
              setConsertosList(resultadoConserto);
            } catch (error) {
              console.error("Erro ao buscar consertos:", error);
            }
          }
        };
        chamadaApi();
      }, [user]);



  return (
    <div>
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col carros-container">
            <DropDownConserto label='Consertos' consertos={consertosList} onChange={changeConserto}></DropDownConserto>
            <h1>Diagnostico: {conserto!.descricaoConserto?conserto!.descricaoConserto:"Nenhum concerto achado"}</h1>
            <PecasLista idConserto={conserto!.idConserto}></PecasLista>
        </div>
    </div>
  )
}
