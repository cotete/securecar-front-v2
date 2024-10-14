import Botao from "@/components/Botao/Botao";
import Link from "next/link"; 

export default function Erro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center border h-5/6 border-slate-200 w-full p-16 lg:w-5/6 lg:shadow-2xl lg:gap-10 xl:pb-20">
                <h1 className="text-4xl font-bold text-center m-10 lg:text-6xl">OPS! Parece que algo deu errado!</h1>
                <p className="text-xl font-bold text-center lg:text-3xl">Você pode tentar resolver isso clicando em algum dos links acima ou no botão abaixo!</p>
                <iframe className="m-3" src="https://lottie.host/embed/4b5ecd27-58e4-452e-957d-75e9dbf3fba7/nMlkBxD8SR.json"></iframe>
                <div className="pb-10">
                    <Link href={"/"}>
                        <Botao tipo="button">Inicio</Botao>
                    </Link>
                </div>
                <p className="font-bold text-lg text-center lg:text-2xl">Caso isso não funcione verifique sua conexão com a internet</p>
            </div>
        </div>
    );
}