
import Image from 'next/image';

type AreaPerfilProps = {
    nome: string;
}

const AreaPerfil = ({ nome }: AreaPerfilProps) => {

    return (
        <div className='flex justify-between border-b-4 border-gray-500 p-4'>
            <Image className='celular:hidden' src='/icons/profile-pic.svg' alt="Imagem de perfil" height={40} width={40} />
            <h2 className='text-3xl font-bold'>{nome}</h2>
        </div>
    )
}

export default AreaPerfil