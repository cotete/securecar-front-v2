
"use client";

import Botao from '@/components/Botao/Botao';
import InputArea from '@/components/InputArea/InputArea';
import { useState } from 'react';
import AreaPerfil from '../AreaPerfil/AreaPerfil';
    import Image from 'next/image';

type SuasConfiguracoesProps ={
    nome:string;
    cpf:string;
    senha:string;
    email:string;
    dataNascimento : string;
}

const SuasConfiguracoes = ({dataNascimento, nome,cpf,senha,email} : SuasConfiguracoesProps)=>{

    const [nomeUser, setNomeUser] = useState(nome);
    const [cpfUser, setCpfUser] = useState(cpf);
    const [senhaUser, setSenhaUser] = useState(senha);
    const [emailUser, setEmailUser] = useState(email);
    const [dataNascimentoUser, setDataNascimentoUser] = useState(dataNascimento)
    const [disable,setDisable] = useState(true);

    function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        // const InfosAtt={
        //     nome: nomeUser,
        //     cpf : cpfUser,
        //     senha : senhaUser,
        //     email : emailUser,
        //     dataNascimento : dataNascimentoUser
        // };
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
                        <InputArea onChange={valor=>setNomeUser(valor)} label='Nome' required={true} placeHolder={nome} value={nomeUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setEmailUser(valor)} label='Email' required={true} placeHolder={email} value={emailUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setSenhaUser(valor)} label='Senha' required={true} placeHolder={senha} value={senhaUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setCpfUser(valor)} label='Cpf' required={true} placeHolder={cpf} value={cpfUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setDataNascimentoUser(valor)} label='Data de Nascimento' required={true} placeHolder={dataNascimento} value={dataNascimentoUser} disable={disable}></InputArea>
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