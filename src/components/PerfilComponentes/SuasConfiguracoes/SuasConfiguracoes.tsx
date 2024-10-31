
"use client";

import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea';
import { useState } from 'react';
import AreaPerfil from '../AreaPerfil/AreaPerfil';
import Image from 'next/image';
import { Usuario } from '@/app/login/page';
import { contatoFinal } from '@/app/api/contato/route';


type SuasConfiguracoesProps ={
    nome:string;
    cpf:string;
    senha:string;
    dataNascimento : string;
    user:Usuario
    contato:contatoFinal;
}

const SuasConfiguracoes = ({contato,user,dataNascimento, nome,cpf,senha} : SuasConfiguracoesProps)=>{

    const [nomeUser, setNomeUser] = useState(nome);
    const [telefoneUser, setTelefoneUser] = useState(contato.telefone);
    const [cpfUser, setCpfUser] = useState(cpf);
    const [senhaUser, setSenhaUser] = useState(senha);
    const [emailUser, setEmailUser] = useState(contato.email);
    const [dataNascimentoUser, setDataNascimentoUser] = useState(dataNascimento)
    const [disable,setDisable] = useState(true);

    async function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(telefoneUser.length == 11 && telefoneUser !="" && cpfUser.length == 11 && senhaUser != "" && emailUser != "" && emailUser.includes('@')){
        const InfosAtt : Usuario={
            nomeUsuario: nomeUser,
            cpf : cpfUser,
            senha : senhaUser,
            rg : dataNascimentoUser,
            genero:user.genero,
            idContato: user.idContato,
            idEndereco:user.idEndereco,
            idUsuario:user.idUsuario 
        };
        const cttAtt : contatoFinal={
            idContato: contato.idContato,
            telefone: telefoneUser,
            email: emailUser
        }

        const resUser = await fetch(`api/usuario/${user.idUsuario}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(InfosAtt)
        })
        const resCtt = await fetch(`api/contato/${contato.idContato}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(cttAtt)
        })
        if(resCtt.ok && resUser.ok){
            alert("Informações atualizadas com sucesso")
        }else{
            alert("Erro ao atualizar informações")
        }
    }else{
        console.error("Algo deu errado")
    }
    }

    function changeDisable(){
        if(disable == false){
            setDisable(true)
            return;
        }
        setDisable(false)
        return;
    }

    return(
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col perfil">
            <section className="top">
                <AreaPerfil nome={nome}/>
            </section>
            <section className="bottom">
                <fieldset className='flex-col'>
                    <form className='mt-6 flex flex-col' action="./" onSubmit={aoSalvar}>
                        <div className='w-full flex justify-between'>
                            <h2 className='text-3xl font-bold'>Informações</h2>
                            <Image className='w-10 cursor-pointer' onClick={changeDisable} src='/icons/edit-svgrepo-com.svg' alt='Icone para mudar informações' height={40} width={40}/>
                        </div>
                        <InputArea onChange={valor=>setNomeUser(valor)} label='Nome' required={true} placeHolder={nome} value={nomeUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setEmailUser(valor)} label='Email' required={true} placeHolder={contato.email} value={emailUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setSenhaUser(valor)} label='Senha' required={true} placeHolder={senha} value={senhaUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setTelefoneUser(valor)} label='Numero' required={true} placeHolder={contato.telefone} value={telefoneUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setCpfUser(valor)} label='Cpf' required={true} placeHolder={cpf} value={cpfUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setDataNascimentoUser(valor)} label='Data de Nascimento' required={true} placeHolder={dataNascimento} value={dataNascimentoUser} disable={true}></InputArea>
                        <div className='mt-3 w-full flex justify-end'>
                            <Botao tipo='submit'>Salvar Informações</Botao>
                        </div>
                    </form>
                </fieldset>
            </section>
        </div>
    )
}

export default SuasConfiguracoes