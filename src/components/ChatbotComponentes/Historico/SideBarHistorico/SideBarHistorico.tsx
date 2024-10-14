import { lista_de_conversas } from "./listaDeConversas"
import SingleConversa from "./SingleConversa/SingleConversa"

type SidebarHistoricoProps = {
  view : boolean
}

const SidebarHistorico = ({view} : SidebarHistoricoProps) => {
  return (
    <>
        <div className={`${view ? 'celular:w-screen celular:max-w-none max-w-xs p-0 flex flex-col h-full max-h-screen overflow-y-hidden' : 'hidden'}`}>
            {lista_de_conversas.map((conversa, indice)=> <SingleConversa key={indice} {...conversa} />)}
        </div>
    </>
  )
}

export default SidebarHistorico