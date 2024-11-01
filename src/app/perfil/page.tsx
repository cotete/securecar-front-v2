"use client";
import { contatoFinal } from "@/app/api/contato/route";
import { endFinalTipo } from "@/app/api/endereco/route";
import Acessibilidade from "@/components/PerfilComponentes/Acessibilidade/Acessibilidade";
import BtnSessoesPerfil from "@/components/PerfilComponentes/BtnSessoesPerfil/BtnSessoesPerfil";
import Carros from "@/components/PerfilComponentes/Carros/Carros";
import Consertos from "@/components/PerfilComponentes/Consertos/Consertos";
import Endereco from "@/components/PerfilComponentes/Endereco/Endereco";
import SuasConfiguracoes from "@/components/PerfilComponentes/SuasConfiguracoes/SuasConfiguracoes";
import { useEffect, useState } from "react";
import { CarroId } from "../types";
import { Usuario } from "../login/page";





const perfil = () => {

    const [conteudo, setConteudo] = useState("Suas Configuracoes")
    const [fontSize, setFontSize] = useState("")
    const [suasConfiguracoes, setSuasConfiguracoes] = useState<boolean>(true)
    const [acessibilidade, setAcessibilidade] = useState<boolean>()
    const [carros, setCarros] = useState<boolean>()
    const [endereco, setEndereco] = useState<boolean>()
    const [consertos, setConsertos] = useState<boolean>()
    const [modo, setModo] = useState<boolean>()
    const [endProp, setEndProp] = useState<endFinalTipo>({
        cep: "",
        nomeLogradouro: "",
        numeroLogradouro: 0,
        idEndereco: 0,
        bairro: "",
        cidade: "",
        uf: ""
    })
    const [contato, setContato] = useState<contatoFinal>({
        idContato: 0,
        telefone: "",
        email: ""

    })


    const [user, setUser] = useState<Usuario>({
        nomeUsuario: "",
        senha: "",
        cpf: "",
        genero: "",
        rg: "",
        idEndereco: 0,
        idContato: 0,
        idUsuario: 0
    });

    useEffect(() => {
        const chamadaUser = async () => {
            try {
                const userString = sessionStorage.getItem("user");
                if (userString) {
                    const parsedUser :Usuario = await JSON.parse(userString);
                    setUser(parsedUser);
                    enderecoAPI(parsedUser.idEndereco!)
                    contatoAPI(parsedUser.idContato!)
                }
            } catch {
                console.log("Erro")
            }
        }

        const contatoAPI = async (idContato: number) => {
            try {
                const res = await fetch(`api/contato/${idContato}`)
                if (res.ok) {
                    const data: contatoFinal = await res.json()
                    setContato(data)
                }
            } catch {
                console.log("ErroInsano")
            }
        }
        const enderecoAPI = async (idEndereco: number) => {
            try {
                const res = await fetch(`api/endereco/${idEndereco}`)
                if (res.ok) {
                    const data: endFinalTipo = await res.json()
                    console.log(data)
                    setEndProp(data)
                }
            } catch {
                console.log("Erro no endereco")
            }
        }
        chamadaUser()
    }, []);

    const changeFonte = (fontSize: string) => {
        if (fontSize === "16px") {
            setFontSize("")
        } else if (fontSize === "20px") {
            setFontSize("")
        } else if (fontSize === "24px") {
            setFontSize("")
        }
    }

    const changeModo = (modo: string) => {
        if (modo === "Modo Escuro") {
            setModo(true)
            return;
        }
        setModo(false)
        return;
    }



    const listaCarro: CarroId[] = []
    function mudaBotao(nome: string) {
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
        switch (conteudo) {
            case 'Suas Configuracoes':
                return <SuasConfiguracoes contato={contato} user={user} dataNascimento={user.rg} nome={user.nomeUsuario} cpf={user.cpf} senha={user.senha} />
            case 'Acessibilidade':
                return <Acessibilidade onChangeFonte={changeFonte} onChangeModo={changeModo} />
            case 'Endereco':
                return <Endereco endereco={endProp} nome={user.nomeUsuario} cep={endProp.cep} numero={String(endProp.numeroLogradouro)} cidade={endProp.cidade} estado={endProp.uf} />
            case 'Carros':
                return <Carros usuario={user} listaCarro={listaCarro} />
            case 'Consertos':
                return <Consertos />
            default:
                return fontSize;
        }

    }

    return (
        <div className={`container tablet:flex-col flex min-w-full ${modo ? "escuro" : ""}`}>
            <div className='w-1/4 tablet:w-full tablet:flex-row left border-t-4 tablet:border-primary tela:border-primary-dark tela:min-h-screen tablet:min-h-auto'>
                <BtnSessoesPerfil clicaImagem={Volta} clicado={suasConfiguracoes} onClick={() => mudaBotao("Suas Configuracoes")} name="Suas Configurações" />
                <BtnSessoesPerfil clicaImagem={Volta} clicado={acessibilidade} name="Acessibilidade" onClick={() => mudaBotao("Acessibilidade")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado={endereco} name="Endereço" onClick={() => mudaBotao("Endereco")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado={carros} name="Carros" onClick={() => mudaBotao("Carros")} />
                <BtnSessoesPerfil clicaImagem={Volta} clicado={consertos} name="Consertos" onClick={() => mudaBotao("Consertos")} />
            </div>
            <div className={`tela:w-3/4 ${suasConfiguracoes || conteudo === "Acessibilidade" || conteudo === "Endereco" || conteudo === "Carros" ? "tablet:flex flex" : "tablet:hidden"} tablet:w-full  justify-center right px-10 py-6 h-4/5`}>
                {conteudoChanger()}
            </div>

        </div>
    )
}

export default perfil