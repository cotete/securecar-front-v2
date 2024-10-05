import CardEquipe from "./CardEquipe/CardEquipe";
import {ListaEquipe} from "./lista_equipe"

const Equipe = () =>{
  return (
    <div className="max-w-screen-xl p-6 min-h-96 flex flex-col m-auto">
      <h3 className="text-center text-5xl py-4">Equipe</h3>
      <div className="flex tablet:flex-col justify-between w-full gap-2">{ListaEquipe.map((membro, idx) => <CardEquipe key={idx} {...membro} />)}</div>
    </div>
  )
}

export default Equipe