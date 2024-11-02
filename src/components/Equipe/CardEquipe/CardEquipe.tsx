import Image from "next/image"
import linkedin from "../../../../public/icons/linkedin.svg";
import github from "../../../../public/icons/github.svg";

export type CardEquipeProps = {
    foto : string,
    nome : string, 
    linkLinkedin : string,
    linkGitHub : string,
}
const CardEquipe = ({foto, nome, linkLinkedin, linkGitHub} : CardEquipeProps) => {
  return (
    <div className="px-10 py-5 flex flex-col gap-5 m-auto shadow-md rounded-md hover:scale-105 transition-all duration-300">
        <Image className="h-40 w-40 rounded-full object-cover my-4" src={foto} alt={"Foto do " + nome} height={160} width={160} />
        <p className="text-2xl font-medium text-center">{nome}</p>
        <div className="flex justify-evenly">
            <a href={linkLinkedin} target="_blank" rel="noreferrer">
                <Image className="h-10 invert" src={linkedin} alt="Logo do LinkedIn" height={40} width={40}/>
            </a>
            <a href={linkGitHub} target="_blank" rel="noreferrer">
                <Image className="h-10 invert" src={github} alt="Logo do GitHub" height={40} width={40} />
            </a>
        </div>


    </div>
  )
}

export default CardEquipe