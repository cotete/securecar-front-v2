import InputArea from "@/components/InputArea/InputArea";
import { useState } from "react";
import { Carro } from "@/app/types";
import Botao from "@/components/Botao/Botao";

type FormAdicionarCarro = {
    onCarroCadastrado: (carro: Carro) => void;
}

const FormAdicionarCarro = ({ onCarroCadastrado }: FormAdicionarCarro) => {
    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [ano, setAno] = useState("")
    const [chassi, setChassi] = useState("")
    const [quilometragem, setQuilometragem] = useState("")
    const [placa, setPlaca] = useState("")
    const [seguro, setSeguro] = useState("")

    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const novoCarro = {
            modelo,
            marca,
            ano,
            chassi,
            quilometragem,
            placa,
            seguro
        };
        setModelo("");
        setMarca("");
        setAno("");
        setChassi("");
        setQuilometragem("");
        setPlaca("");
        setSeguro("");

        onCarroCadastrado(novoCarro);
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
                    value={marca}
                    required={true}
                    onChange={valor => setMarca(valor)}
                    label="Marca"
                    placeHolder="Digite a Marca do seu carro aqui" />
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
                    max_length={7}
                    placeHolder="Digite a Placa do seu carro aqui" />
                <InputArea
                    value={seguro}
                    required={true}
                    onChange={valor => setSeguro(valor)}
                    label="Seguro"
                    placeHolder="Digite a seguro do seu carro aqui" />
                <div className="mt-3 flex justify-end BtnSubmit-area">
                    <Botao tipo="submit">Adicionar Carro</Botao>
                </div>
            </form>
        </fieldset>
    )
}

export default FormAdicionarCarro