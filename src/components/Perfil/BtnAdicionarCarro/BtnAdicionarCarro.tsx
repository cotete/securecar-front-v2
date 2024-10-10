
import { Carro } from "@/app/types" 
import ModalAdicionarCarro from "../ModalAdicionarCarro/ModalAdicionarCarro";
import { useState } from "react"
import Botao from "@/components/Botao/Botao"
import Image from "next/image"


type btnAdicionarCarroProps ={
    onAddCarro : (carro : Carro) => void
}

const BtnAdicionarCarro = ({onAddCarro} : btnAdicionarCarroProps) =>{

    const[show,setShow] = useState(false)

    
    const handleAddCarro = (carro :Carro) => {
        onAddCarro(carro);
        setShow(false);
    

    };

    return(
        <div className="addCarro">
            <Botao tipo="button" onClick={()=>setShow(true)}><Image className="h-10 group-hover:invert" src="/icons/add-circle-svgrepo-com.svg" alt="Imagem que sinaliza adição"></Image>Adicionar Carro</Botao>
            <ModalAdicionarCarro onAddCarro={handleAddCarro}  isOpen = {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></ModalAdicionarCarro>
        </div>
    )
}

export default BtnAdicionarCarro