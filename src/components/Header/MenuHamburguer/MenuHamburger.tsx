"use client"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import perfil from "../../../../public/icons/profile-pic.svg";  
import { Usuario } from "@/app/login/page";


type MenuProps = {
    onClick: () => void;
    clicado: boolean;
    setClicado: (value: boolean) => void
}


const MenuHamburguer = ({ onClick, clicado, setClicado }: MenuProps) => {
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

    const closeMenu = () => {
        setClicado(false);
    };
    
    const ApiUser =async (id:number) =>{
        try{
            const res = await fetch(`http://localhost:8080/usuario/${id}`)
            if(res.ok){
                const data :Usuario = await res.json()
                console.log(data)
                return data
            }
        }catch{
            console.log("Erro ao puxar usuario")
        }
    }

    useEffect(() => {
        const chamadaUser = async () => {
            try {
                const userString = sessionStorage.getItem("user");
                if (userString) {
                    const parsedUser :Usuario = await JSON.parse(userString);
                    console.log(parsedUser.idUsuario)
                    const user = await ApiUser(parsedUser.idUsuario!)
                    console.log(user)
                    if(user){
                        setUser(user);

                    }
                }
            } catch {
                console.log("Erro")
            }
        }
        chamadaUser()
    },[])
    // const location = useRouter(); 

    useEffect(() => {
        setClicado(false);
    }, [setClicado]);

    return (
        <div className={clicado ? `flex w-screen h-screen flex-col items-end px-8` : ""}>
            <FontAwesomeIcon onClick={onClick} className="cursor-pointer hover:scale-105 transition-all duration-300 mb-4 p-4" color="#fff" size="2xl" icon={faBars} />
            <div className="flex w-full flex-col justify-center items-end">
                <Link className={clicado ? `static flex text-xl text-white hover:text-black mx-3 font-medium w-max gap-4 items-center py-4` : "hidden"} onClick={closeMenu} href={user.nomeUsuario !="" ? "/perfil" : '/login'}>Seu perfil<Image src={perfil} alt="Imagem de perfil" className="h-[30px] hover:scale-110 transition" height={40} width={40}></Image></Link>
                <NavBar isMenuHamburguer={clicado} onLinkClick={closeMenu} />
            </div>
        </div>
    )
}

export default MenuHamburguer