import Link from "next/link"

type NavBarProps = {
    isMenuHamburguer?: boolean
    onLinkClick?: () => void;
}

const NavBar = ({ isMenuHamburguer, onLinkClick  }: NavBarProps) => {

    return (
        <div className={`${isMenuHamburguer ? ' flex flex-col gap-2 w-full gap-y-5 celular:items-end' : 'tablet:hidden'}`}>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" onClick={onLinkClick} href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?region=us-south&integrationID=73f9e0d6-ba50-48e3-9875-183d96deb3cb&serviceInstanceID=f8bcc4dd-e927-4915-8abd-ed33d159b5bf">ChatBot</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium " onClick={onLinkClick} href="/ajuda">Perguntas Frequentes</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" onClick={onLinkClick} href="/blog">Novidades</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" onClick={onLinkClick} href={"/integrantes"}> Equipe </Link>
        </div>
    )
}

export default NavBar