"use client"
import { useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea";


type FormRegistroProps = {
  onSubmit: (inputNome: string, inputEmail: string, inputSenha: string, inputSenhaAux: string, inputCPF: string, inputEndereco: string, inputCEP: string,inputNascimento:string, inputTelefone: string) => void;
};

const FormRegistro = ({ onSubmit }: FormRegistroProps) => {

  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [inputSenhaAux, setInputSenhaAux] = useState("");
  const [inputCPF, setInputCPF] = useState("");
  const [inputEndereco, setInputEndereco] = useState("");
  const [inputCEP, setInputCEP] = useState("");
  const [inputNascimento, setInputNascimento] = useState("");
  const [inputTelefone, setInputTelefone] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    function verificaEmail(inputEmail: string): boolean {
        if(inputEmail.includes("@")){
            return true
        }else{
            return false
        }
      }

    if(inputSenhaAux == inputSenha && verificaEmail(inputEmail) && inputCEP.length==9 && inputCPF.length==11){
        onSubmit(inputNome, inputEmail, inputSenha, inputSenhaAux, inputCPF, inputEndereco, inputCEP,inputNascimento, inputTelefone);
        setInputNome("");
        setInputEmail("");
        setInputSenha("");
        setInputSenhaAux("");
        setInputCPF("");
        setInputEndereco("");
        setInputCEP("");
        setInputTelefone("");
    }else{
        console.log("Algo de errado aconteceu.")
    }
    
  };

  return (
    <fieldset>
      <form className="gap-0.5 flex flex-col" onSubmit={handleSubmit}>
        <InputArea
          value={inputNome}
          required={true}
          onChange={valor => setInputNome(valor)}
          label="Nome Completo"
          placeHolder="Digite seu nome completo"
        />
        <InputArea
          value={inputEmail}
          required={true}
          onChange={valor => setInputEmail(valor)}
          label="Email"
          tipo="email"
          placeHolder="Digite seu email"
        />
        <InputArea
          value={inputSenha}
          required={true}
          tipo="password"
          onChange={valor => setInputSenha(valor)}
          label="Senha"
          placeHolder="Digite sua senha"
        />
        <InputArea
          value={inputSenhaAux}
          required={true}
          tipo="password"
          onChange={valor => setInputSenhaAux(valor)}
          label="Confirmar Senha"
          placeHolder="Confirme sua senha"
        />
        <InputArea
          value={inputCPF}
          required={true}
          onChange={valor => setInputCPF(valor)}
          label="CPF"
          placeHolder="Digite seu CPF (somente números)"
          max_length={11}
        />
        <InputArea
          value={inputEndereco}
          required={true}
          onChange={valor => setInputEndereco(valor)}
          label="Endereço"
          placeHolder="Digite seu Endereço"
        />
        <InputArea
          value={inputCEP}
          required={true}
          onChange={valor => setInputCEP(valor)}
          label="CEP"
          max_length={9}
          placeHolder="XXXXX-XXX"
        />
         <InputArea
          value={inputNascimento}
          required={true}
          onChange={valor => setInputNascimento(valor)}
          label="Data de Nascimento"
          tipo="date"
          max_length={9}
          placeHolder="XXXXX-XXX"
        />
        <InputArea
          value={inputTelefone}
          required={true}
          onChange={valor => setInputTelefone(valor)}
          label="Telefone"
          placeHolder="Digite seu Telefone (somente números)"
        />
        <div className="p-3 w-full flex items-center justify-center">
          <Botao tipo="submit">Cadastre-se</Botao>
        </div>
      </form>
    </fieldset>
  );
};

export default FormRegistro;