"use client"
import { useState } from "react"
import FormLogin from "@/components/LoginComponentes/FormLogin/FormLogin"; 
import FormRegistro, { contato } from "@/components/LoginComponentes/FormRegistro/FormRegistro"; 
import { endFinalTipo } from "@/app/api/endereco/route";
import { contatoFinal } from "@/app/api/contato/route";

export type Usuario = {
    nomeUsuario: string;
    senha: string;
    cpf: string;
    genero:string;
    rg:string;
    idEndereco?:number
    idContato?:number
    idUsuario?:number
};

export type enderecoTipo={
    cep:string
    nomeLogradouro:string
    numeroLogradouro:number
    uf:string
    cidade:string,
    bairro:string
    complemento?:string;
}

const lista_user: Usuario[] = []
const PaginaRegistroLogin = () => {

    const [conteudo, setConteudo] = useState('Cadastro')

    async function  guardarEndereco(endereco:enderecoTipo){
        const res = await fetch("api/endereco",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(endereco),
        })
        return res
    }
    async function  guardarUser(user:Usuario){
        const res = await fetch("api/usuario",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        return res
    }
    async function  guardarContato(contato:contato){
        const res = await fetch("api/contato",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        })
        return res
    }

    async function cadastrar(inputNome: string, inputSenha: string, inputCPF: string, inputNascimento:string, contato: contato, endereco:enderecoTipo , inputRG:string,inputGenero:string): Promise<void> {

            const usuario: Usuario = {
                nomeUsuario : inputNome,
                senha: inputSenha,
                cpf: inputCPF,
                genero:inputGenero,
                rg:inputRG
            };
            const resVia  = await guardarEndereco(endereco)
            const resCont = await guardarContato(contato)
            const endRes : endFinalTipo = await resVia.json();
            const endCont : contatoFinal = await resCont.json();
            console.log(endRes)
            console.log(endCont)
            //fazer do contato
            if(resCont.ok && resVia.ok ){
                usuario['idEndereco']=endRes.idEndereco
                usuario['idContato']= endCont.idContato
                const resUser = await guardarUser(usuario)
                lista_user.push(usuario)
                console.log(usuario)
                if(resUser.ok){
                    setConteudo("Login")
                }else{
                    console.error("Erro ao cadastrar")
                }
                
            }else{
                console.error("Erro ao cadastrar")
            }
            
    }

    const conteudoChanger = () => {
        switch (conteudo) {
            case 'Cadastro':
                return <FormRegistro onSubmit={cadastrar} />
            case 'Login':
                return <FormLogin usuarios={lista_user}/>
        }
    }


    return (
        <div className="h-auto flex flex-col items-center mt-6 w-full pb-20">
            <div className="border-2 rounded-xl shadow-xl p-4 h-auto tela:w-[35rem] tablet:w-[26rem]">
                <div className="flex justify-around">
                    <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-md hover:bg-primary hover:text-white ${conteudo == "Cadastro" ? "bg-primary text-white" : ""}`} onClick={() => setConteudo('Cadastro')}>Cadastrar-se</button>
                    <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-md hover:bg-primary hover:text-white ${conteudo == "Login" ? "bg-primary text-white" : ""}`} onClick={() => setConteudo('Login')}>Acessar Conta</button>
                </div>
                {conteudoChanger()}
            </div>
        </div>
    )
}

export default PaginaRegistroLogin