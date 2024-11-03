import React, { useEffect, useState } from 'react'

export type pecasTipo={
    idPeca:number
    valorPeca:number
    descricaoPeca:string
    quantidadePeca:number
    quantidadePedido:number
}



export default function PecasLista( {idUser,idConserto} :{idUser:number,idConserto:number}) {

    const [listaPecas,setListaPecas] = useState<pecasTipo[]>()

    useEffect(()=>{
        const chamadaApi = async ()=>{
            const data  = await fetch(`http://localhost:8080/conserto/${idConserto}/pecas`)
            const lista : pecasTipo[] = await data.json()
            console.log(lista)
            if (lista){
                setListaPecas(lista)
            }    
        }

        chamadaApi();
    },[idConserto])



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
                    <tr key={peca.idPeca} className="even:bg-gray-50">
                        <td className="px-4 py-2">{peca.idPeca}</td>
                        <td className="px-4 py-2">{peca.descricaoPeca} R$</td>
                        <td className="px-4 py-2">R$ {peca.valorPeca}</td>
                        <td className="px-4 py-2">{peca.quantidadePedido}</td>
                    </tr>)):
                    <tr>Nenhum conserto selecionado</tr>}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            Valor total conserto: {listaPecas? listaPecas.reduce((acc, peca) => acc + peca.valorPeca, 0): 0}
                        </td>
                    </tr>
                </tfoot>
            </table>

    </div>

  )
}
