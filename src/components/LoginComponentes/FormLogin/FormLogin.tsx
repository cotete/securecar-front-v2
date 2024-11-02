"use client";
import { useEffect, useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea"; 
import InputMask from "react-input-mask"; // Importa a biblioteca
import { Usuario } from "@/app/login/page"; 
import { useRouter } from "next/navigation";

type FormLoginProps = {
    usuarios: Usuario[]; 
};

const FormLogin = ({usuarios}: FormLoginProps) => {
    const [inputCPF, setInputCPF] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [listaUsers, setListaUsers] = useState<Usuario[]>();
    const nav = useRouter();

    useEffect(() => {
        const chamaApi = async () => {
            try {
                const res = await fetch("api/usuario");
                const data: Usuario[] = await res.json();
                setListaUsers(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };
        chamaApi();
    }, []);

    const validar = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        if (!listaUsers) {
            console.log("Usuários ainda não foram carregados.");
            return;
        }

        let usuarioAchado = false;
        for (let x = 0; x < listaUsers.length; x++) {
            let user = listaUsers[x];
            if (user.cpf === inputCPF && user.senha === inputSenha) {
                sessionStorage.setItem("user", JSON.stringify(user));
                setInputCPF("");
                setInputSenha("");
                console.log("Logado");
                usuarioAchado = true;
                nav.push("/");
                break;
            }
        }
        if (!usuarioAchado) {
            console.log("Nenhum user encontrado");
        }
    };

    return (
        <fieldset>
            <form className="flex flex-col" onSubmit={validar}>
                <label className="mt-3 font-semibold text-lg">CPF</label>
                <InputMask
                    mask="999.999.999-99"
                    value={inputCPF}
                    onChange={e => setInputCPF(e.target.value)}
                    required
                    placeholder="Digite seu CPF"
                    className="rounded-xl p-3 border-2 border-primary shadow-md"
                />
                <InputArea
                    value={inputSenha}
                    required={true}
                    onChange={valor => setInputSenha(valor)}
                    label="Senha"
                    placeHolder="Digite sua senha"
                />
                <div className="p-3 w-full flex items-center justify-center">
                    <Botao tipo="submit">Acessar Conta</Botao>
                </div>
            </form>
        </fieldset>
    );
};

export default FormLogin;
