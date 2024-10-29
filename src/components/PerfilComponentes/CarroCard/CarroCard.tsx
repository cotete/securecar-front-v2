import { useState } from "react"

import CarroModal from "../CarroModal/CarroModal"
import { CarroId } from "@/app/types";

type CarroCardProps = {
    nome : string;
    carro : CarroId;
    removerCarro : (id : number)=>void;
}


const CarroCard = ({nome, carro, removerCarro} : CarroCardProps) =>{
    const[show,setShow] = useState(false)


    return(
        <div className="b-primary b-2">
            <button className="hover:bg-primary tablet:h-[7rem] tablet:w-[7rem] hover:text-white font-semibold text-xl border-primary border-2 w-[7rem] h-[7rem]" onClick={()=>setShow(true)}>{nome}</button>
            <CarroModal removerCarro={removerCarro} carro ={carro} isOpen= {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></CarroModal>
        </div>
    )
}

export default CarroCard