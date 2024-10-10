import InputArea from "@/components/InputArea/InputArea"; 
import AreaPerfil from "../AreaPerfil/AreaPerfil"; 
import { useState } from "react";
import Botao from "@/components/Botao/Botao";
import Image from "next/image";

type EnderecoProps = {
    nome : string;
    cep : string;
    numero : string;
    cidade : string;
    estado : string;
}

const Endereco = ({nome,cep,numero,cidade,estado} : EnderecoProps)=>{

    const [cepUser, setCepUser] = useState(cep);
    const [numeroUser, setNumeroUser] = useState(numero);
    const [cidadeUser, setCidadeUser] = useState(cidade);
    const [estadoUser, setEstadoUser] = useState(estado)


    const [disable,setDisable] = useState(true);

    function changeDisable(){
        if(disable == false){
            setDisable(true)
            return;
        }
        setDisable(false)
        return;
    }

    function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        // const InfosAtt={
        //     cep: cepUser,
        //     numero : numeroUser,
        //     cidade : cidadeUser,
        //     estado : estadoUser
        // };

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
                            <Image className='w-10 cursor-pointer' onClick={changeDisable} src="/icons/edit-svgrepo-com.svg" alt='Icone para mudar informações'/>
                        </div>
                        <InputArea onChange={valor=>setCepUser(valor)} label='Cep' required={true} placeHolder={cepUser} value={cepUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setEstadoUser(valor)} label='Estado' required={true} placeHolder={estadoUser} value={estadoUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setCidadeUser(valor)} label='Cidade' required={true} placeHolder={cidadeUser} value={cidadeUser} disable={true}></InputArea>
                        <InputArea onChange={valor=>setNumeroUser(valor)} label='Número' required={true} placeHolder={numeroUser} value={numeroUser} disable={true}></InputArea>
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