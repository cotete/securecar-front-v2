"use client"
import { useEffect, useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea"; 
import { Usuario } from "@/app/login/page"; 
import { useRouter } from "next/navigation";


const maskCPF = (value: string): string => {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
};
  
const FormLogin = ()=>{
    const [inputCPF, setInputCPF] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [listaUsers,setListaUsers] = useState<Usuario[]>();
    const nav = useRouter();

    useEffect(()=>{
        const chamaApi = async () => {
            try{
            const res = await fetch("http://localhost:8080/usuario")
            const data :Usuario[] = await res.json()
            setListaUsers(data)
            
        }catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
        }
        chamaApi()
    },[])

    const removeMaskCPF = (value: string): string => {
        return value.replace(/\D/g, ''); // Remove tudo que não é número
      };

    const validar = (e: React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault();
        console.log(listaUsers)
        if (!listaUsers) {
            console.log("Usuários ainda não foram carregados.");
            return;
        }
        const cleanedCPF = removeMaskCPF(inputCPF);
        if(listaUsers != undefined){
        let usuarioAchado = false;
        for(let x = 0; x < listaUsers.length; x++){
            const user = listaUsers[x];
            if(user.cpf === cleanedCPF && user.senha === inputSenha){
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
                onChange={(valor: string) => setInputCPF(maskCPF(valor))}
                label="CPF"
                placeHolder="Digite seu CPF (XXX.XXX.XXX-XX)"
                max_length={14}
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