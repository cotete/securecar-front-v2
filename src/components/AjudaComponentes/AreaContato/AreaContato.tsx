import Botao from "@/components/Botao/Botao" 
import InputArea from "@/components/InputArea/InputArea" 


const AreaContato = ()=>{


    return(
        <div className="w-full h-4/5 border-2 border-gray-200 shadow-xl flex flex-col p-4">
                <div className="flex w-full flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold mb-5">Não conseguiu resolver o seu problema?</h1>
                    <p className="text-xl font-semibold text-center">Preencha o formulário abaixo para que a gente possa te encaminhar para um profissional, para que ele possa te ajudar!</p>
                </div>
            <form className="h-full flex flex-col gap-y-2" action="">
                <InputArea label="Email" required={true} placeHolder="Digite o seu email aqui"/>
                <label className="mt-3 font-semibold text-lg">Digite a sua duvida aqui!</label>
                <textarea placeholder="Digite sua mensagem aqui" className="rounded-xl p-3 border-2 min-h-32 max-h-52 border-primary shadow-xl" name="Mensagem" id="mensagem"></textarea>
                <div className="flex w-full items-center justify-center">
                    <Botao tipo="submit">Enviar mensagem!</Botao>
                </div>
            </form>
        </div>
    )
}

export default AreaContato