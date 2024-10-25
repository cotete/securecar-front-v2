import React, { useEffect, useState } from 'react'

export type pecasTipo={
    id:number
    vlPeca:number
    dsPeca:string
    qtdPeca:number
}



export default function PecasLista( {idUser,idConserto} :{idUser:number,idConserto:number}) {

    const [listaPecas,setListaPecas] = useState<pecasTipo[]>()

    useEffect(()=>{
        const chamadaApi = async ()=>{
            const data  = await fetch(`conserto/${idUser}/${idConserto}`)
            const lista : pecasTipo[] = await data.json()
            if (lista){
                setListaPecas(lista)
            }    
        }

        chamadaApi();

        
    },[])



  return (
    <div>
        <table className="w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-[#FFEDE7]">
                        <th className="px-4 py-2 text-left w-1/4">Id</th>
                        <th className="px-4 py-2 text-left w-1/4">Nome da peça</th>
                        <th className="px-4 py-2 text-left w-1/4">Valor</th>
                        <th className="px-4 py-2 text-left w-1/4">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPecas? listaPecas.map(peca=>(
                    <tr className="even:bg-gray-50">
                        <td className="px-4 py-2">{peca.id}</td>
                        <td className="px-4 py-2">{peca.dsPeca} R$</td>
                        <td className="px-4 py-2">{peca.vlPeca}</td>
                        <td className="px-4 py-2">{peca.qtdPeca}</td>
                    </tr>)):
                    <tr>Nenhum conserto selecionado</tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            Valor total conserto: {listaPecas? listaPecas.reduce((acc, peca) => acc + peca.vlPeca, 0): 0}
                        </td>
                    </tr>
                </tfoot>
            </table>

    </div>

  )
}
