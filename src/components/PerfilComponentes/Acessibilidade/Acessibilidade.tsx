"use client";

import DropDown from "../DropDown/DropDown";

type AcessibilidadeProps ={
    onChangeModo : (valor : string)=>void;
    onChangeFonte : (valor : string)=>void
}

const Acessibilidade = ({onChangeModo, onChangeFonte} : AcessibilidadeProps)=>{



    return(
        <div className="tablet:w-full border-2 rounded-xl shadow-xl p-4 w-full flex flex-col acessibilidade">
            <div className="flex justify-between border-b-4 border-gray-500 p-4">
                <h1 className="text-3xl font-bold">Acessibilidade</h1>
            </div>
            <div className="configs">
                <DropDown label="Tema do Site" opcoes={["Modo Escuro","Modo Claro"]} onChange={onChangeModo}></DropDown>
                <DropDown label="Tamanho da fonte" opcoes={["16px" , "20px", "24px"]} onChange={onChangeFonte}></DropDown>
            </div>
        </div>
    )
}

export default Acessibilidade