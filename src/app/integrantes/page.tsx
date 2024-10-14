import Integrantes from "@/components/IntegrantesComponentes/Integrantes/Integrantes" 






type Integrantes = {
    nome:string;
    rm:number;
    turma:string;
    github:string;
    src:string;
}

const PaginaDosParticipantes = ()=>{

const integrantes:Integrantes[] = [
    {
        nome: "Felipe Ribeiro Tardochi da Silva",
        rm: 555100,
        turma:"1TDSPH",
        github:"https://github.com/cotete",
        src: "/img/felipe.webp"
    },
    {
        nome: "Gustavo Dias da Silva Cruz",
        rm: 556448,
        turma:"1TDSPH",
        github:"https://github.com/gustavodscruz",
        src:"/img/gustavo.webp"
    },
    {
        nome: "Enrico Figueiredo Del Guerra",
        rm: 558604,
        turma:"1TDSPH",
        github:"https://github.com/enricodelguerra",
        src:"/img/enrico.webp"
    }
]

    return(
        <>
        <h1 className="md:text-3xl tela:4xl celular:text-2xl text-center tracking-wide font-semibold pt-4">Pagina dos Participantes</h1>
        <Integrantes integrante={integrantes}/>
        </>
    )
}

export default PaginaDosParticipantes