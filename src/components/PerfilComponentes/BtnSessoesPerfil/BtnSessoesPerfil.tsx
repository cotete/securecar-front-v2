import Image from "next/image";
import backArrow from "../../../../public/icons/navigation-back-arrow-svgrepo-com.svg";

type SessoesPerfilProps = {
    onClick: () => void;
    name: string;
    clicado: boolean | undefined
    clicaImagem: () => void;
}

const BtnSessoesPerfil = ({ clicado, onClick, name, clicaImagem }: SessoesPerfilProps) => {

    return (
        <div className={`area tablet:w-full border-b-4 items-center tablet:border-primary  tela:border-primary-dark tablet:flex ${clicado ? '' : 'tablet:hidden'}`}>
            <div >
                <Image className={`h-16 cursor-pointer tela:hidden`} onClick={() => clicaImagem()} src={backArrow} alt="Imagem de voltar" width={64} height={64} />
            </div>
            <button onClick={() => onClick()} className={`${clicado == true ? "tela:bg-primary-dark" : "tela:bg-primary tablet:hidden tablet:bg-white"}  text-2xl w-full tablet:h-28 tela:h-40 link`}>{name}</button>
        </div>
    )
}

export default BtnSessoesPerfil