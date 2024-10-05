"use client"
import { useState } from "react";
import MenuHamburguer from "./MenuHamburguer/MenuHamburger";
import NavBar from "./NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [clicado, setClicado] = useState(false)
  // const login = sessionStorage.getItem('Logado')


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
        <Image src="/img/logo_porto.svg" alt="Logo Porto" className="celular:h-7 celular:-mt-3 h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" height={40} width={100} objectFit="contain" />
      </Link>
      <NavBar />
      <Link className="tablet:hidden static flex w-[129px] justify-end" href="/conta">
        <Image alt="Conta de perfil ícone" src="/icons/profile-pic.svg" className="h-[40px] hover:scale-110 transition" height={40} width={40} ></Image>
      </Link>
      <div className="tela:hidden">
        <MenuHamburguer setClicado={setClicado} clicado={clicado} onClick={() => clicadoVerifica()}></MenuHamburguer>
      </div>
    </header>

  );
};

export default Header;
