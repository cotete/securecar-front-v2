

type MensangesProps={
    mensagem : string
}

const Mensagens = ({mensagem}: MensangesProps)=>{

    return(
        <div className="p-3 pl-5 float-right rounded-[40px] min-w-[10rem] self-end flex flex-wrap items-center justify-center break-words h-auto bg-primary w-fit">
            <p className="text-white text-lg">{mensagem}</p>
        </div>
    )

}

export default Mensagens