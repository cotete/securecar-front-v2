"use client"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
// import { useRouter } from "next/router";
import useStorage from "@/utils/hooks/useStorage";
import Image from "next/image";
import Link from "next/link";
import perfil from "../../../../public/icons/profile-pic.svg";  


type MenuProps = {
    onClick: () => void;
    clicado: boolean;
    setClicado: (value: boolean) => void
}


const MenuHamburguer = ({ onClick, clicado, setClicado }: MenuProps) => {
    const { getItem } = useStorage()
    const login = getItem('Logado')
    // const location = useRouter(); 

    useEffect(() => {
        setClicado(false);
    }, [setClicado]);

    return (
        <div className={clicado ? `flex w-screen h-screen flex-col items-end px-8` : ""}>
            <FontAwesomeIcon onClick={onClick} className="cursor-pointer hover:scale-105 transition-all duration-300 mb-4 p-4" color="#fff" size="2xl" icon={faBars} />
            <div className="flex w-full flex-col justify-center items-end">
                <Link className={clicado ? `static flex text-xl text-white hover:text-black mx-3 font-medium w-max gap-4 items-center py-4` : "hidden"} href={login ? "/perfil" : '/login'}>Seu perfil<Image src={perfil} alt="Imagem de perfil" className="h-[30px] hover:scale-110 transition" height={40} width={40}></Image></Link>
                <NavBar isMenuHamburguer={clicado}></NavBar>
            </div>
        </div>
    )
}

export default MenuHamburguer