"use client";

import InputArea from "@/components/InputArea/InputArea"; 
import AreaPerfil from "../AreaPerfil/AreaPerfil"; 
import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import Image from "next/image";
import { endFinalTipo } from "@/app/api/endereco/route";
import { enderecoTipo } from "@/app/login/page";
import { viacepTipo } from "@/components/LoginComponentes/FormRegistro/FormRegistro";
import editar from "../../../../public/icons/edit-svgrepo-com.svg";
type EnderecoProps = {
    nome : string;
    cep : string;
    numero : string;
    cidade : string;
    estado : string;
    endereco:endFinalTipo
}

const Endereco = ({endereco,nome,cep,numero,cidade,estado} : EnderecoProps)=>{

    const [cepUser, setCepUser] = useState(cep);
    const [numeroUser, setNumeroUser] = useState(numero);
    const [cidadeUser, setCidadeUser] = useState(cidade);
    const [estadoUser, setEstadoUser] = useState(estado)



    const [disable,setDisable] = useState(true);

    const [cepValido,setCepValido] = useState(false);

    function changeDisable(){
        if(disable == false){
            setDisable(true)
            return;
        }
        setDisable(false)
        return;
    }

    async function  guardarEndereco(end : enderecoTipo){
        const res = await fetch(`api/endereco/${endereco.idEndereco}`,{
            method: "PUT",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(end),
        })
        return res
    }

    async function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(endereco)
        
        const via  = await viaCep(cepUser)
        const {cep} = via!
        cep.replace("-"," ")
        const enderecoNovo:enderecoTipo = {
            cep: cepUser,
            nomeLogradouro:via!.logradouro,
            numeroLogradouro:parseInt(numeroUser),
            uf:via!.uf,
            cidade:via!.localidade,
            bairro:via!.bairro,
            complemento:"insano"
          }
          console.log(enderecoNovo)
        const res = await guardarEndereco(enderecoNovo)
        if(res.ok){
            alert("Endereco Atualizado com sucesso!")
        }else{
            alert("Falha ao atualizar o endereço")
        }
    

    }

    async function buscaCEP(cep:string) {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        if(res.ok){
            const data : viacepTipo = await res.json();
            setCepValido(true)
            setCepUser(cep)
            setEstadoUser(data.estado)
            setCidadeUser(data.localidade)
        }else{
            setCepValido(false)
        }
    }
    const viaCep = async (cep:string) => {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.ok) {
              throw new Error(`Erro ao buscar CEP: ${response.statusText}`);
          }
          const data : viacepTipo = await response.json();
          console.log(data)
          return data;
      } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
      }
      }

    return(
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col Endereco">
            <section className="top">
                <AreaPerfil nome={nome}/>
            </section>
            <section className="bottom">
                <fieldset className='flex-col'>
                    <form className='mt-6 flex flex-col' action="./" onSubmit={aoSalvar}>
                    <div className='w-full flex justify-between'>
                            <h2 className='text-3xl font-bold'>Endereço</h2>
                            <Image className='w-10 cursor-pointer' onClick={changeDisable} src={editar} alt='Icone para mudar informações' height={40} width={40}/>
                        </div>
                        <InputArea onChange={valor=>setCepUser(valor)} max_length={8} label='Cep' required={true} placeHolder={cepUser} value={cepUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setEstadoUser(valor)} label='Estado' required={true} placeHolder={estadoUser} value={estadoUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setCidadeUser(valor)} label='Cidade' required={true} placeHolder={cidadeUser} value={cidadeUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setNumeroUser(valor)} label='Número' required={true} placeHolder={numeroUser} value={numeroUser} disable={disable}></InputArea>
                        <div className='mt-3 w-full flex justify-end'>
                            <Botao tipo='submit'>Salvar Informações</Botao>
                        </div>
                    </form>
                </fieldset>
            </section>
        </div>
    )

}
export default Endereco