import { CarroId } from "@/app/types";

import { useRef , useEffect, useState } from "react"
import InfoCarro from "../InfoCarro/InfoCarro";
import { Usuario } from "@/app/login/page";



type CarroModalProps = {
    isOpen : boolean;
    carro: CarroId;
    children: React.ReactNode;
    removerCarro: (id : number)=>void;
}

const CarroModal = ({isOpen, carro,children,removerCarro} : CarroModalProps)=>{

    const ref = useRef<HTMLDialogElement>(null)

    const [open,setOpen] = useState(isOpen)
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
        setOpen(isOpen);
        
      }, [isOpen]);

      
    
      useEffect(() => {
        const chamadaUser = async () => {
            try {
                const userString = sessionStorage.getItem("user");
                if (userString) {
                    const parsedUser :Usuario = await JSON.parse(userString);
                    setUser(parsedUser);
                }
            } catch {
                console.log("Erro")
            }
        }
        chamadaUser()
        const dialog = ref.current;
        if (open && dialog) {
          dialog.showModal();
        } else if (dialog) {
          dialog.close();
        }
      }, [open]);
    async function handleRemover(id:number){
        removerCarro(id)
        try{
            const data = await fetch(`api/carro/${user.idUsuario}/${id}`,{
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
        if(parseFloat(carro.quilometragem) > 8000){
            return`Cuidado está próximo da revisão de 10000 Quilômetros. Faltam ${10000 - parseFloat(carro.quilometragem)/10000} Quilômetros.`
        }else{
            return`Faltam ${10000 - (parseFloat(carro.quilometragem)/10000)} Quilômetros para a revisão`
        }
    }
    return(
        <dialog ref = {ref} className={`w-[26rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pr-2 p-5 ${isOpen ? "open":""}`}>
            <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">{children}</div>

            <h1 className="text-3xl font-bold">{carro.modelo}</h1>
            <InfoCarro title="Placa" span={carro.placa}/>
            <InfoCarro title="Ano" span={carro.ano} />
            <InfoCarro title="Quilometragem" span={carro.quilometragem} />
            <InfoCarro title="Chassi" span={carro.chassi} />
            <InfoCarro title="Revisão dos 10000 Quilômetros" span={revisao()} />
            <button className="group cursor-pointer flex flex-row justify-center items-center min-w-52 hover:bg-primary hover:text-white font-semibold text-lg w-2/5 rounded-xl p-3 border-2 border-primary shadow-md" type="button" onClick={() => handleRemover(carro.idCarro)}>Remover Veiculo</button>
        </dialog>
    )
}

export default CarroModal