"use client";
import Acessibilidade from "@/components/PerfilComponentes/Acessibilidade/Acessibilidade";
import BtnSessoesPerfil from "@/components/PerfilComponentes/BtnSessoesPerfil/BtnSessoesPerfil";
import Carros from "@/components/PerfilComponentes/Carros/Carros";
import Endereco from "@/components/PerfilComponentes/Endereco/Endereco";
import SuasConfiguracoes from "@/components/PerfilComponentes/SuasConfiguracoes/SuasConfiguracoes";
import { useState } from "react";



const perfil = ()=>{
    
    const [conteudo,setConteudo] = useState("Suas Configuracoes")
    const [fontSize, setFontSize] = useState("")
    const [suasConfiguracoes, setSuasConfiguracoes] = useState<boolean>(true)
    const [acessibilidade, setAcessibilidade] = useState<boolean>()
    const [carros, setCarros] = useState<boolean>()
    const [endereco, setEndereco] = useState<boolean>()
    const [modo , setModo] = useState<boolean>()

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



    const listaCarro : [] = []
    function mudaBotao(nome : string){
        setConteudo(nome)
        setSuasConfiguracoes(nome === "Suas Configuracoes")
        setCarros(nome === "Carros")
        setEndereco(nome === "Endereco")
        setAcessibilidade(nome === "Acessibilidade")
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
                return <SuasConfiguracoes dataNascimento="25/10/1980" nome="gerson bragantino" cpf="123.123.123-12" senha="********" email="gersonbragantino@email.com"/>
            case 'Acessibilidade':
                return  <Acessibilidade onChangeFonte={changeFonte} onChangeModo={changeModo}/>
            case 'Endereco':
                return <Endereco nome="gerson bragantino" cep="12312-123" numero="10" cidade="Sao pulo" estado="SP"/>
            case 'Carros':
                return <Carros listaCarro={listaCarro}/>
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
            </div>
            <div className={`tela:w-3/4 ${suasConfiguracoes ||conteudo === "Acessibilidade" || conteudo === "Endereco" || conteudo === "Carros" ? "tablet:flex flex":"tablet:hidden"} tablet:w-full  justify-center right px-10 py-6 h-4/5`}>
                {conteudoChanger()}
            </div>

        </div>
    )
}

export default perfil