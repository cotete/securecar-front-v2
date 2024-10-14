"use client"
import HelpCard from "@/components/ajudaComp/HelpCard/HelpCard"; 
import lista_help from "./lista_help";
import AreaContato from "@/components/ajudaComp/AreaContato/AreaContato";

const PaginaFAQ = ()=>{


    return(
        <div className="flex items-center justify-center">
            <div className="tela:min-h-screen tablet:h-auto tela:w-11/12 tela-xl:flex-col tela-xl:h-auto tablet:flex-col flex flex-row item border-2 border-gray-200 shadow-xl p-10 mt-20 pl-20 mb-20">
                <div className="tela:w-2/3 tablet:w-full tela-xl:w-full tela-xl:items-center tablet:items-center flex flex-col gap-y-8 ">
                    <h1 className="text-4xl font-bold">Perguntas frequentes</h1>
                    {lista_help.map((help,index) =><HelpCard key={index} header={help.header} conteudo={help.conteudo}/>)}
                </div>
                <div className="tela:w-1/3 tablet:w-full tela-xl:w-full flex tela:min-w-[25rem] justify-center mt-20">
                    <AreaContato/>
                </div>
            </div>
        </div>
    )
}

export default PaginaFAQ