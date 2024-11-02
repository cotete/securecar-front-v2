
import { Carro, CarroId } from "@/app/types" 
import ModalAdicionarCarro from "../ModalAdicionarCarro/ModalAdicionarCarro";
import { useState } from "react"
import Botao from "@/components/Botao/Botao"
import Image from "next/image"
import adicionarCarro from "../../../../public/icons/add-circle-svgrepo-com.svg";

type btnAdicionarCarroProps ={
    onAddCarro : (carro : CarroId) => void
}

const BtnAdicionarCarro = ({onAddCarro} : btnAdicionarCarroProps) =>{

    const[show,setShow] = useState(false)

    
    const handleAddCarro = (carro :CarroId) => {
        onAddCarro(carro);
        setShow(false);
    

    };

    return(
        <div className="addCarro">
            <Botao tipo="button" onClick={()=>setShow(true)}><Image className="h-10 group-hover:invert" src={adicionarCarro} alt="Imagem que sinaliza adição" height={40} width={40}></Image>Adicionar Carro</Botao>
            <ModalAdicionarCarro onAddCarro={handleAddCarro}  isOpen = {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></ModalAdicionarCarro>
        </div>
    )
}

export default BtnAdicionarCarro