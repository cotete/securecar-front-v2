import Link from "next/link"

type NavBarProps = {
    isMenuHamburguer? : boolean
}

const NavBar = ({isMenuHamburguer} : NavBarProps)=>{

    return (
        <div className={`${isMenuHamburguer ? ' flex flex-col gap-2 w-full gap-y-5 celular:items-end' : 'tablet:hidden'}`}>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" href="/chatbot">ChatBot</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium " href="/faq">Perguntas Frequentes</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" href="/blog">Novidades</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" href={"/participantes"}> Equipe </Link>
         </div>
    )
}

export default NavBar