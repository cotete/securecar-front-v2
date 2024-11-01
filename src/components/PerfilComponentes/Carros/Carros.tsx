"use client";
import { useEffect, useState } from "react";
import BtnAdicionarCarro from "../BtnAdicionarCarro/BtnAdicionarCarro";
import { Carro, CarroId } from "@/app/types"; 
import CarroCard from "../CarroCard/CarroCard";
import { Usuario } from "@/app/login/page";




type CarroListProps = {
    listaCarro: CarroId[];
    usuario:Usuario
};


const Carros = ({listaCarro,usuario} : CarroListProps)=>{


   
    const [carros, setCarros] = useState<CarroId[]>([{
        idCarro:0,
        idSeguro:0,
        idUsuario:0,
        modelo:"",
        ano:"",
        placa:"",
        quilometragem:"",
        chassi:""
    }]);

    const adicionarLista = (carro : CarroId) => {
        setCarros([...carros,carro]);
        listaCarro.push(carro)

    };

    const removerCarro = async (id: number) => {
        const novosCarros = carros.filter(carro => carro.idCarro !== id);
        setCarros(novosCarros); 
 
    }

    useEffect(()=>{
        const chamadaAPI = async () => {
            try{
            const res = await fetch(`/api/carro/${usuario.idUsuario}`)
            if(res.ok){
                const data : CarroId[] = await res.json()
                setCarros(data)
            }else{
                throw new Error("Erro ao chamar API carros")
            }
            
        }catch(err){
            console.error("erro: " , err)
        }
        }
        chamadaAPI()
        console.log(carros)
    },[listaCarro])

    return(
        carros.length > 0?
        <div className="rounded-xl w-full tablet:w-full p-3 border-2 border-gray-500 shadow-xl carros-container">
            <div className="flex justify-between border-b-4 mb-4 border-gray-500 p-4">
            <h1 className="text-3xl font-bold">Carros</h1>
            </div>
            <div className="h-80 w-full flex flex-col"> 
                <div className="w-full flex justify-end">
                <BtnAdicionarCarro onAddCarro={adicionarLista}/> 
                </div>
                <div className="flex flex-row gap-1	">
                    {carros.map(carro =><CarroCard removerCarro={removerCarro} key={carro.modelo} carro = {carro} nome = {carro.modelo}/>)} 
                </div>
            </div>
        </div>:
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col carros-container">
            <div className={`flex justify-between ${carros.length >0?"border-b-4":""} border-gray-500 p-4`}>
                <h1 className="text-3xl font-bold">Carros</h1>
            </div>
                <div className="h-80 w-full flex justify-center items-center flex-col">
                    <h2 className="font-semibold text-2xl mb-10 text-gray-500">Você ainda não possui nenhum carro Cadastrado!</h2>
                    <BtnAdicionarCarro onAddCarro={adicionarLista}/>
                </div>
            </div>
    )

}

export default Carros