
"use client";

import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea';
import { useState } from 'react';
import AreaPerfil from '../AreaPerfil/AreaPerfil';
import Image from 'next/image';
import { Usuario } from '@/app/login/page';
import { contatoFinal } from '@/app/api/contato/route';
import editar from "../../../../public/icons/edit-svgrepo-com.svg";

type SuasConfiguracoesProps ={
    nome:string;
    cpf:string;
    senha:string;
    dataNascimento : string;
    user:Usuario
    contato:contatoFinal;
    changeModo: (enviado:boolean)=>void
}

const SuasConfiguracoes = ({contato,user,dataNascimento, nome,cpf,senha,changeModo} : SuasConfiguracoesProps)=>{

    const [nomeUser, setNomeUser] = useState(user.nomeUsuario);
    const [telefoneUser, setTelefoneUser] = useState<string>(contato.telefone);
    const [cpfUser, setCpfUser] = useState(user.cpf);
    const [senhaUser, setSenhaUser] = useState(user.senha);
    const [emailUser, setEmailUser] = useState(contato.email);
    const [dataNascimentoUser, setDataNascimentoUser] = useState(dataNascimento)
    const [disable,setDisable] = useState(true);

    async function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(telefoneUser,cpfUser,senhaUser,emailUser)
        if(String(telefoneUser).length == 11 && telefoneUser !="" && senhaUser != "" && emailUser != "" && emailUser.includes('@')){
            const InfosAtt ={
                nomeUsuario: nomeUser,
                senha : senhaUser,
                genero:user.genero,
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
            changeModo(true)
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
                            <Image className='w-10 cursor-pointer' onClick={changeDisable} src={editar} alt='Icone para mudar informações' height={40} width={40}/>
                        </div>
                        <InputArea onChange={valor=>setNomeUser(valor)} label='Nome' required={true} placeHolder={nome} value={nomeUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setEmailUser(valor)} label='Email' required={true} placeHolder={contato.email} value={emailUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setSenhaUser(valor)} label='Senha' required={true} placeHolder={senha} value={senhaUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setTelefoneUser(valor)} label='Numero' required={true} placeHolder={contato.telefone} value={telefoneUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setCpfUser(valor)} label='Cpf' required={true} placeHolder={cpf} value={cpfUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setDataNascimentoUser(valor)} label='RG' required={true} placeHolder={dataNascimento} value={dataNascimentoUser} disable={true}></InputArea>
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