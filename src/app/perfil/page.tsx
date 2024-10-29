"use client";
import { contatoFinal } from "@/api/contato/route";
import { endFinalTipo } from "@/api/endereco/route";
import { FinalUser } from "@/api/usuario/route";
import Acessibilidade from "@/components/PerfilComponentes/Acessibilidade/Acessibilidade";
import BtnSessoesPerfil from "@/components/PerfilComponentes/BtnSessoesPerfil/BtnSessoesPerfil";
import Carros from "@/components/PerfilComponentes/Carros/Carros";
import Consertos from "@/components/PerfilComponentes/Consertos/Consertos";
import Endereco from "@/components/PerfilComponentes/Endereco/Endereco";
import SuasConfiguracoes from "@/components/PerfilComponentes/SuasConfiguracoes/SuasConfiguracoes";
import { useEffect, useState } from "react";
import { CarroId } from "../types";





const perfil = ()=>{
    
    const [conteudo,setConteudo] = useState("Suas Configuracoes")
    const [fontSize, setFontSize] = useState("")
    const [suasConfiguracoes, setSuasConfiguracoes] = useState<boolean>(true)
    const [acessibilidade, setAcessibilidade] = useState<boolean>()
    const [carros, setCarros] = useState<boolean>()
    const [endereco, setEndereco] = useState<boolean>()
    const [consertos, setConsertos] = useState<boolean>()
    const [modo , setModo] = useState<boolean>()
    const [endProp,setEndProp] = useState<endFinalTipo>({
        nr_cep:"",
        nm_logradouro:"",
        nr_logradouro:"",
        id_endereco:0,
        nm_bairro:"",
        nm_cidade:"",
        nm_uf:""
    })
    const [contato,setContato] = useState<contatoFinal>({
        id_contato:0,
        nr_telefone: "",
        ds_email:""
        
    })

    
    const [user, setUser] = useState<FinalUser>({
        nm_usuario:"",
        ds_senha: "",
        nr_cpf: "",
        Nascimento: "",
        id_endereco: 0,
        id_contato: 0,
        id_user:0
    });

    useEffect(() => {

        const userString  = sessionStorage.getItem("user");
        if (userString) {
            setUser(JSON.parse(userString));
        }
        const contatoAPI = async()=>{
            const res = await fetch(`EndAPI/${user}`)
            if(res.ok){
                const data : contatoFinal = await res.json()
                setContato(data)
            }
        }
        const enderecoAPI = async ()=>{
            const res = await fetch(`EndAPI/${user}`)
            if(res.ok){
                const data : endFinalTipo = await res.json()
                setEndProp(data)
            }
        }
        enderecoAPI()
        contatoAPI()
    }, []);

    const changeFonte = (fontSize : string) =>{
        if(fontSize === "16px"){
            setFontSize("")
        }else if(fontSize === "20px"){
            setFontSize("")
        }else if(fontSize === "24px"){
            setFontSize("")
        }
    }

    const changeModo = (modo :string)=>{
        if( modo === "Modo Escuro"){
            setModo(true)
            return;
        }
        setModo(false)
        return; 
    }



    const listaCarro : CarroId[] = []
    function mudaBotao(nome : string){
        setConteudo(nome)
        setSuasConfiguracoes(nome === "Suas Configuracoes")
        setCarros(nome === "Carros")
        setEndereco(nome === "Endereco")
        setAcessibilidade(nome === "Acessibilidade")
        setConsertos(nome === "Consertos")
    }

    function Volta() {
        setAcessibilidade(true)
        setCarros(true)
        setEndereco(true)
        setSuasConfiguracoes(true)
        setConteudo("")
    }

    const conteudoChanger = () => {
        switch(conteudo){
            case 'Suas Configuracoes':
                return <SuasConfiguracoes dataNascimento={user.Nascimento} nome={user.nm_usuario} cpf={user.nr_cpf} senha={user.ds_senha} email={contato.ds_email}/>
            case 'Acessibilidade':
                return  <Acessibilidade onChangeFonte={changeFonte} onChangeModo={changeModo}/>
            case 'Endereco':
                return <Endereco nome={user.nm_usuario} cep={endProp.nr_cep} numero={endProp.nr_logradouro} cidade={endProp.nm_cidade} estado={endProp.nm_uf}/>
            case 'Carros':
                return <Carros usuario={user} listaCarro={listaCarro}/>
            case 'Consertos':
                return <Consertos/>
            default:
                return fontSize;
        }
            
    }

    return(
        <div className={`container tablet:flex-col flex min-w-full ${modo ? "escuro":""}`}>
            <div className='w-1/4 tablet:w-full tablet:flex-row left border-t-4 tablet:border-primary tela:border-primary-dark tela:min-h-screen tablet:min-h-auto'>
                <BtnSessoesPerfil clicaImagem={Volta} clicado = {suasConfiguracoes} onClick ={() => mudaBotao("Suas Configuracoes")} name ="Suas Configurações" />
                <BtnSessoesPerfil clicaImagem={Volta} clicado = {acessibilidade} name="Acessibilidade" onClick={() => mudaBotao("Acessibilidade")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado = {endereco} name="Endereço" onClick={() => mudaBotao("Endereco")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado = {carros} name="Carros" onClick={() => mudaBotao("Carros")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado = {consertos} name="Consertos" onClick={() => mudaBotao("Consertos")} />
            </div>
            <div className={`tela:w-3/4 ${suasConfiguracoes ||conteudo === "Acessibilidade" || conteudo === "Endereco" || conteudo === "Carros" ? "tablet:flex flex":"tablet:hidden"} tablet:w-full  justify-center right px-10 py-6 h-4/5`}>
                {conteudoChanger()}
            </div>

        </div>
    )
}

export default perfil