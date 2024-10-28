"use client"
import { useState } from "react"
import FormLogin from "@/components/LoginComponentes/FormLogin/FormLogin"; 
import FormRegistro, { contato } from "@/components/LoginComponentes/FormRegistro/FormRegistro"; 
import { endFinalTipo } from "@/api/endereco/route";
import { contatoFinal } from "@/api/contato/route";

export type Usuario = {
    nm_usuario: string;
    ds_senha: string;
    nr_cpf: string;
    Nascimento:string;
    id_endereco?:number
    id_contato?:number
};

export type enderecoTipo={
    nr_cep:string
    nm_logradouro:string
    nr_logradouro:string
    nm_uf:string
    nm_cidade:string,
    nm_bairro:string
}

const lista_user: Usuario[] = []
const PaginaRegistroLogin = () => {

    const [conteudo, setConteudo] = useState('Cadastro')

    async function  guardarEndereco(endereco:enderecoTipo){
        const res = await fetch("Endereco-Link",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(endereco),
        })
        return res
    }
    async function  guardarUser(user:Usuario){
        const res = await fetch("user-Link",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        return res
    }
    async function  guardarContato(contato:contato){
        const res = await fetch("contato-Link",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        })
        return res
    }

    async function cadastrar(inputNome: string, inputSenha: string, inputCPF: string, inputNascimento:string, contato: contato, endereco:enderecoTipo): Promise<void> {
            const usuario: Usuario = {
                nm_usuario : inputNome,
                ds_senha: inputSenha,
                nr_cpf: inputCPF,
                Nascimento: inputNascimento,
            };
            const resVia  = await guardarEndereco(endereco)
            const resCont = await guardarContato(contato)
            const endRes : endFinalTipo = await resVia.json();
            const endCont : contatoFinal = await resCont.json();
            //fazer do contato
            if(resCont.ok && resVia.ok ){
                usuario['id_endereco']=endRes.id_endereco
                usuario['id_contato']= endCont.id_contato
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