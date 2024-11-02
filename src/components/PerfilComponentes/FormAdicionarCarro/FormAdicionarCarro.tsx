"use client";
import InputArea from "@/components/InputArea/InputArea";
import { useEffect, useState } from "react";
import { CarroId } from "@/app/types";
import Botao from "@/components/Botao/Botao";
import { FinalUser } from "@/app/api/usuario/route";
import { Usuario } from "@/app/login/page";

type FormAdicionarCarro = {
    onCarroCadastrado: (carro: CarroId) => void;
}

const FormAdicionarCarro = ({ onCarroCadastrado }: FormAdicionarCarro) => {
    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [ano, setAno] = useState("")
    const [chassi, setChassi] = useState("")
    const [quilometragem, setQuilometragem] = useState("")
    const [placa, setPlaca] = useState("")
    const [seguro, setSeguro] = useState("")
    const [carro, setCarro] = useState<CarroId>({
        idCarro:0,
        idSeguro:0,
        idUsuario:0,
        modelo:"",
        ano:"",
        placa:"",
        quilometragem:"",
        chassi:"",
    })
    const [user, setUser] = useState<Usuario>({
        nomeUsuario:"",
        senha: "",
        cpf: "",
        rg: "",
        genero:"",
        idEndereco: 0,
        idContato: 0,
        idUsuario:0
    });


    useEffect(() => {

        const userString  = sessionStorage.getItem("user");
        if (userString) {
            setUser(JSON.parse(userString));
        }
    }, []);

    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const quilo = parseFloat(quilometragem)
        const anoParsed = parseInt(ano)
        let novoCarro = {
            modelo,
            "ano":anoParsed,
            chassi,
            "quilometragem":quilo,
            placa,
            idUsuario:user.idUsuario,
            idSeguro:1
        };
        try{
            const data = await fetch(`api/carro/`,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },body:JSON.stringify(novoCarro)
            })
            if(data.ok){
                let car : CarroId = await data.json()
                setCarro(car)
            }else{
                throw new Error("Erro ao Adicionar carro")
            }
        }catch(err){
            console.error("Erro: ", err)
        }
        setModelo("");
        setMarca("");
        setAno("");
        setChassi("");
        setQuilometragem("");
        setPlaca("");
        setSeguro("");

        onCarroCadastrado(carro);
    };
    return (
        <fieldset>
            <form className="flex flex-col" onSubmit={onSave}>
                <InputArea
                    value={modelo}
                    required={true}
                    onChange={valor => setModelo(valor)}
                    label="Modelo"
                    placeHolder="Digite o Modelo do seu carro aqui" />
                <InputArea
                    value={ano}
                    required={true}
                    tipo="number"
                    max_length={4}
                    onChange={valor => setAno(valor)}
                    label="Ano"
                    placeHolder="Digite o Ano do seu carro aqui" />
                <InputArea
                    value={chassi}
                    required={true}
                    max_length={17}
                    onChange={valor => setChassi(valor)}
                    label="Chassi"
                    placeHolder="Digite o Chassi do seu carro aqui" />
                <InputArea
                    value={quilometragem}
                    required={true}
                    onChange={valor => setQuilometragem(valor)}
                    tipo="number"
                    label="Quilômetragem"
                    placeHolder="Digite a Quilometragem do seu carro aqui" />
                <InputArea
                    value={placa}
                    required={true}
                    onChange={valor => setPlaca(valor)}
                    label="Placa"
                    max_length={8}
                    placeHolder="Digite a Placa do seu carro aqui" />
                
                <div className="mt-3 flex justify-end BtnSubmit-area">
                    <Botao tipo="submit">Adicionar Carro</Botao>
                </div>
            </form>
        </fieldset>
    )
}

export default FormAdicionarCarro