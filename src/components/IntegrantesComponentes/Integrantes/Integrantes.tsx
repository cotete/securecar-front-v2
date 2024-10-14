import Image from "next/image";

type Integrantes = {
    nome: string;
    rm: number;
    turma: string;
    github: string;
    src: string;
}

export default function Integrantes({ integrante }: { integrante: Integrantes[] }) {
    return (
        <div className="max-w-screen-lg m-auto ate-tela:m-auto">
            <ul>
                {integrante.map((itg) => (
                    <li key={itg.rm} className="flex ate-tela:flex-col flex-row items-center space-x-10 pb-4 ate-tela:pl-0 ate-tela:space-x-0 pl-3 pt-5 text-3xl">
                        <Image src={itg.src} alt={itg.nome} height={300} width={300} className="w-1/3 lg:w-2/5 lg:rounded-full ate-tela:rounded-full ate-tela:h-40 ate-tela:w-40 ate-tela:mb-2 "/>
                        <div className="w-full flex flex-col ate-tela:justify-center ate-tela:items-center">
                            <p className="text-center font-semibold text-wrap ate-tela:max-w-screen-sm ate-tela:text-3xl celular:!text-xl" >{itg.nome}</p>
                            <p className="text-center text-wrap ate-tela:max-w-screen-sm ate-tela:text-3xl celular:!text-xl" >RM: {itg.rm}</p>
                            <p className="text-center text-wrap ate-tela:max-w-screen-sm ate-tela:text-3xl celular:!text-xl" >Turma: {itg.turma}</p>
                            <a className="text-center text-wrap ate-tela:max-w-screen-sm ate-tela:text-3xl celular:!text-xl w-full hover:text-primary-dark hover:tracking-wide hover:font-semibold transition-all duration-300" href={itg.github} target="_blank" rel="noopener noreferrer">{itg.github}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
