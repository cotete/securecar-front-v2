"use client"
import { useState } from "react";
import Botao from "@/components/Botao/Botao"; 
import InputArea from "@/components/InputArea/InputArea";
import { enderecoTipo } from "@/app/login/page";


type FormRegistroProps = {
  onSubmit: (inputNome: string, inputSenha: string, inputCPF: string, inputNascimento:string, contato: contato, endereco:enderecoTipo,inputRG:string,inputGenero:string)=> Promise<void>;

};

export type contato= {
  telefone: string;
  email:string
}

export type viacepTipo={
  cep:string;
  logradouro:string;
  complemento:string;
  unidade:string;
  bairro:string;
  localidade:string;
  uf:string;
  estado:string;
  regiao:string;
  ibge:string;
  gia:string;
  ddd:string;
  siafi:string;
}

const FormRegistro = ({ onSubmit }: FormRegistroProps) => {

  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [inputSenhaAux, setInputSenhaAux] = useState("");
  const [inputCPF, setInputCPF] = useState("");
  const [inputRg, setInputRg] = useState("");
  const [inputGenero, setInputGenero] = useState("");
  const [inputNumero, setInputNumero] = useState("");
  const [inputCEP, setInputCEP] = useState("");
  const [inputNascimento, setInputNascimento] = useState("2002/10/10");
  const [inputTelefone, setInputTelefone] = useState("");


  const viaCep = async (cep:string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
          throw new Error(`Erro ao buscar CEP: ${response.statusText}`);
      }
      const data : viacepTipo = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
  }
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const via = await viaCep(inputCEP)
    if (!via) {
      console.error("Erro ao obter o endereço com o CEP fornecido.");
      return;
    }
    
    

    
    function verificaEmail(inputEmail: string): boolean {
        if(inputEmail.includes("@")){
            return true
        }else{
            return true
        }
      }

    if(inputSenhaAux === inputSenha && verificaEmail(inputEmail) && inputCEP.length===8 && inputCPF.length===11){
        const endereco:enderecoTipo = {
          cep: inputCEP,
          nomeLogradouro:via.logradouro,
          numeroLogradouro:parseInt(inputNumero),
          uf:via.uf,
          cidade:via.localidade,
          bairro:via.bairro,
          complemento:"complmento isnano"
        }

        const contato : contato = {
          telefone:inputTelefone,
          email:inputEmail
        }

        onSubmit(inputNome, inputSenha, inputCPF, inputNascimento, contato, endereco,inputRg,inputGenero);
        
        setInputNome("");
        setInputEmail("");
        setInputSenha("");
        setInputSenhaAux("");
        setInputCPF("");
        setInputNumero("");
        setInputCEP("");
        setInputTelefone("");
        setInputRg("");
        setInputGenero("")
    }else{
        console.error("Algo de errado aconteceu.")
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
      value={inputNumero}
      required={true}
      onChange={valor => setInputNumero(valor)}
      label="Numero Logradouro"
      placeHolder="Digite o numero da sua residência"
      tipo="number"
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
      value={inputTelefone}
      required={true}
      onChange={valor => setInputTelefone(valor)}
      label="Telefone"
      placeHolder="Digite seu Telefone (DDXXXXXXXXX)"

    />
    <InputArea
      value={inputRg}
      required={true}
      onChange={valor => setInputRg(valor)}
      label="RG"
      placeHolder="Digite seu RG (somente números)"
      max_length={9}
    />
    <InputArea
      value={inputGenero}
      required={true}
      onChange={valor => setInputGenero(valor)}
      label="Gênero"
      placeHolder="Digite seu gênero (M/F/Outro)"
    />
    <label className="font-semibold text-sm">Somente números</label>
    <div className="p-3 w-full flex items-center justify-center">
      <Botao tipo="submit">Cadastre-se</Botao>
    </div>
  </form>
</fieldset>
  );
};

export default FormRegistro;