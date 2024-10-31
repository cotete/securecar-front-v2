import { CarroId } from "@/app/types";

import { useRef , useEffect, useState } from "react"
import InfoCarro from "../InfoCarro/InfoCarro";
import { seguro } from "@/app/api/seguro/route";



type CarroModalProps = {
    isOpen : boolean;
    carro: CarroId;
    children: React.ReactNode;
    removerCarro: (id : number)=>void;
}

const CarroModal = ({isOpen, carro,children,removerCarro} : CarroModalProps)=>{

    const ref = useRef<HTMLDialogElement>(null)

    const [open,setOpen] = useState(isOpen)
    const [seguro,setSeguro] = useState("")

    useEffect(() => {
        setOpen(isOpen);
        
      }, [isOpen]);

      
    
      useEffect(() => {
        const chamadaSeguro = async () => {
            try{
                const res = await fetch(`api/seguro/${carro.id_seguro}`)
                if(res.ok){
                    const data : seguro = await res.json()
                    const seg = data.nm_seguro
                    setSeguro(seg)
                }else{
                    throw new Error("Erro ao buscar por id_seguro")
                }
            }catch(err){
                console.error("Erro ao buscar seguro: ",err)
            }
        }
        const dialog = ref.current;
        if (open && dialog) {
          dialog.showModal();
          chamadaSeguro()
        } else if (dialog) {
          dialog.close();
        }
      }, [open]);
    async function handleRemover(id:number){
        removerCarro(id)
        try{
            const data = await fetch(`api/carros/${id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(data.ok){
                setOpen(false)
            }
        }catch(err){
            console.error("Erro: " , err)
        }
        
    }

    const revisao = ()=>{
        if(parseFloat(carro.km_carro) > 8000){
            return`Cuidado está próximo da revisão de 10000 Quilômetros. Faltam ${10000 - parseFloat(carro.km_carro)/10000} Quilômetros.`
        }else{
            return`Faltam ${10000 - (parseFloat(carro.km_carro)/10000)} Quilômetros para a revisão`
        }
    }
    return(
        <dialog ref = {ref} className={`w-[26rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pr-2 p-5 ${isOpen ? "open":""}`}>
            <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">{children}</div>

            <h1 className="text-3xl font-bold">{carro.nm_modelo}</h1>
            <InfoCarro title="Placa" span={carro.nr_placa}/>
            <InfoCarro title="Ano" span={carro.nr_ano} />
            <InfoCarro title="Quilometragem" span={carro.km_carro} />
            <InfoCarro title="Chassi" span={carro.ds_chassi} />
            <InfoCarro title="Revisão dos 10000 Quilômetros" span={revisao()} />
            <InfoCarro title="Seguro" span={seguro} />
            <button className="group cursor-pointer flex flex-row justify-center items-center min-w-52 hover:bg-primary hover:text-white font-semibold text-lg w-2/5 rounded-xl p-3 border-2 border-primary shadow-md" type="button" onClick={() => handleRemover(carro.id_carro)}>Remover Veiculo</button>
        </dialog>
    )
}

export default CarroModal