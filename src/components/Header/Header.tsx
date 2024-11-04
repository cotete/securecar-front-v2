"use client"
import { useEffect, useState } from "react";
import MenuHamburguer from "./MenuHamburguer/MenuHamburger";
import NavBar from "./NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";
import logoPorto from "../../../public/img/logo_porto.svg";
import perfil from "../../../public/icons/profile-pic.svg";
import { Usuario } from "@/app/login/page";
const Header = () => {
  const [clicado, setClicado] = useState(false)

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


  function clicadoVerifica() {
    if (clicado) {
      setClicado(false)

      return
    }
    setClicado(true)
    return
  }

  


  return (
    <header className="z-20 sticky mg-[71px] top-0 flex justify-between bg-primary items-center px-4 py-4 celular:py-0">
      <Link href={"/"}>
        <Image src={logoPorto} alt="Logo Porto" className="celular:h-7 celular:-mt-3 h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" height={40} width={100} objectFit="contain" />
      </Link>
      <NavBar />
      <Link className="tablet:hidden static flex w-[129px] justify-end" href={user.nomeUsuario !="" ? "/perfil" : '/login'}>
        <Image alt="Conta de perfil ícone" src={perfil} className="h-[40px] hover:scale-110 transition" height={40} width={40} ></Image>
      </Link>
      <div className="tela:hidden">
        <MenuHamburguer setClicado={setClicado} clicado={clicado} onClick={() => clicadoVerifica()}></MenuHamburguer>
      </div>
    </header>

  );
};

export default Header;
