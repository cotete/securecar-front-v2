"use client";

import Historico from "@/components/ChatbotComponentes/Historico/Historico"; 
import { useEffect, useRef, useState } from "react";
import Mensagens from "@/components/ChatbotComponentes/Mensagens/Mensagens"; 
import AvaliacaoPopup from "@/components/ChatbotComponentes/Avaliacao/AvaliacaoPopUp"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Usuario } from "../login/page";


const PaginaChatBot = ()=>{
    const listaMensagens : string[]=[];

    const [user, setUser] = useState<Usuario>({
        nm_usuario:"",
        ds_senha: "",
        nr_cpf: "",
        Nascimento: "",
        id_endereco: 0,
        id_contato: 0,
        id_usuario:0
    });

    useEffect(() => {

        const userString  = sessionStorage.getItem("user");
        if (userString) {
            setUser(JSON.parse(userString));
        }
    }, []);


    const [mensagem,setMensagem] = useState("");
    const [mensagens,setMensagens] = useState<string[]>(listaMensagens);
    const mensagensEndRef = useRef<HTMLDivElement>(null);

    function enviarMsg(e :React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (mensagem !== "") {
            setMensagens([...mensagens, mensagem]);
            setMensagem("");
        }
    }
    function enviarMsgClick(){

        if (mensagem !== "") {
            setMensagens([...mensagens, mensagem]);
            setMensagem("");
        }
    }

    const scrollToBottom = () => {
        if (mensagensEndRef.current) {
            mensagensEndRef.current.scrollTop = mensagensEndRef.current.scrollHeight;
        }
    };

    const [isOpen, setOpen] = useState(false);
    const fecharAvaliacao = () =>{
        setOpen(!isOpen)
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        const mostrarAvaliacao = () => {
            if (mensagens.length >= 5 && count == 0) {
                setOpen(!isOpen);
                setCount(count + 1)
            }
        };
        scrollToBottom();
        mostrarAvaliacao();
    }, [count, isOpen, mensagens]);

    const [clicked, setClicked] = useState(false)
    
    const toggleViewHistory = () => {
        setClicked(!clicked)
      } 

    return(
        <>
            <div className="hidden celular:flex gap-5 items-center w-full bg-primary p-4 border-t border-primary-dark" onClick={toggleViewHistory}>
                <FontAwesomeIcon icon={faAngleRight} className={`text-white text-xl ${clicked ? 'rotate-90 transition-all duration-150' : ''}`} />
                <p className={`text-white tracking-wide font-semibold transition-all duration-300 ${clicked ? 'hidden' : ''}`}>Abrir histórico</p>
                <p className={`text-white tracking-wide font-semibold transition-all duration-300 ${clicked ? '' : 'hidden'}`}>Fechar histórico</p>
            </div>
            <div className="min-h-full flex justify-between w-full  items-end">
                <Historico clicked={clicked} />
                <div className="flex h-full w-full flex-col items-end pb-2 bottom-0 relative px-5">
                    <div ref={mensagensEndRef} className="w-[50%] h-full  mb-5 overflow-x-hidden overflow-y-scroll">
                        <div className="flex justify-end min-h-full items-end flex-col gap-y-4">
                        {mensagens.length > 0? mensagens.map((mensagem,index) => <Mensagens key={index} mensagem={mensagem}/>) : ""} 
                        </div>            
                    </div>
                    
                    <div className="w-full flex py-2 px-4  justify-between justify-self-end self-end rounded-custom-xlg border-primary shadow-md border-4 h-max  bottom-0 ">
                        <form className="w-full" action="./chatbot" onSubmit={enviarMsg}>
                            <input className="w-11/12 p-3 outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-black mr-2 just" value={mensagem} onChange={valor =>setMensagem(valor.target.value)} type="text" placeholder="Digite aqui" />
                        </form>
                        <div className=" flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-1/12 p-1">
                            <Image className="w-full h-10" height={40} width={40} onClick={enviarMsgClick} src={"/icons/send.svg"} alt="Imagem de enviar mensagem" />
                        </div>
                    </div>
                </div>
            </div>
            <AvaliacaoPopup usuario={user} isOpen={isOpen} onClose={fecharAvaliacao} />
        </>
    )
}

export default PaginaChatBot