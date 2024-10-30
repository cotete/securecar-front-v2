"use client"
import { useEffect, useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea"; 
import { Usuario } from "@/app/login/page"; 
import { useRouter } from "next/navigation";
import { FinalUser } from "@/app/api/usuario/route";


type FormLoginProps = {
    usuarios: Usuario[]; 
  };


const FormLogin = ({usuarios}: FormLoginProps)=>{
    const [inputCPF, setInputCPF] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    //criar tipo da lista
    const [listaUsers,setListaUsers] = useState<Usuario[]>();
    const nav = useRouter();

    useEffect(()=>{
        const chamaApi = async () => {
            const res = await fetch("api/usuario")
            //tipar
            const data :FinalUser[] = await res.json()
            setListaUsers(data)
        }
        chamaApi()
    },[])



    const validar = (e: React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault();
        if(listaUsers != undefined){
        let usuarioAchado = false;
        for(let x = 0; x < listaUsers.length; x++){
            let user = usuarios[x];
            if(user.nr_cpf === inputCPF && user.ds_senha === inputSenha){
                sessionStorage.setItem("user", JSON.stringify(user));
                setInputCPF("");
                setInputSenha("");
                console.log("Logado");
                usuarioAchado = true;
                nav.push("/")
                break;
            }
        }
        if (!usuarioAchado) {
            console.log("Nenhum user encontrado");
        }
    }
    }

    return(
        <fieldset>
            <form className="flex flex-col" onSubmit={validar}>
                <InputArea
                value={inputCPF}
                required={true}
                onChange={valor => setInputCPF(valor)}
                label="CPF"
                placeHolder="Digite seu CPF"
                />
                <InputArea
                value={inputSenha}
                required={true}
                onChange={valor => setInputSenha(valor)}
                label="Senha"
                placeHolder="Digite sua senha"
                />
                <div className="p-3 w-full flex items-center justify-center">
                <Botao tipo="submit">Acessar Conta</Botao>
                </div>
            </form>
        </fieldset>
    )
}

export default FormLogin