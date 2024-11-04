import React, { useEffect, useState } from "react";
import { BsFilePdf } from "react-icons/bs";

export type pecasTipo = {
  idPeca: number;
  valorPeca: number;
  descricaoPeca: string;
  quantidadePeca: number;
  quantidadePedido: number;
};

export default function PecasLista({ idConserto }: { idConserto: number }) {
  const [listaPecas, setListaPecas] = useState<pecasTipo[]>();

  useEffect(() => {
    const chamadaApi = async () => {
      const data = await fetch(
        `http://localhost:8080/conserto/${idConserto}/pecas`
      );
      const lista: pecasTipo[] = await data.json();
      console.log(lista);
      if (lista) {
        setListaPecas(lista);
      }
    };

    chamadaApi();
  }, [idConserto]);

  return (
    <div>
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-primary">
            <th className="px-4 py-2 text-left w-1/4">Id</th>
            <th className="px-4 py-2 text-left w-1/4">Nome da peça</th>
            <th className="px-4 py-2 text-left w-1/4">Valor</th>
            <th className="px-4 py-2 text-left w-1/4">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {listaPecas ? (
            listaPecas.map((peca) => (
              <tr key={peca.idPeca} className="even:bg-gray-50">
                <td className="px-4 py-2">{peca.idPeca}</td>
                <td className="px-4 py-2">{peca.descricaoPeca} R$</td>
                <td className="px-4 py-2">R$ {peca.valorPeca}</td>
                <td className="px-4 py-2">{peca.quantidadePedido}</td>
              </tr>
            ))
          ) : (
            <tr>Nenhum conserto selecionado</tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>
              Valor total conserto:{" "}
              {listaPecas
                ? listaPecas.reduce((acc, peca) => acc + peca.valorPeca, 0)
                : 0}
            </td>
          </tr>
        </tfoot>
      </table>
      <a className="rounded bg-red-300 border-red-800 text-red-950 font-medium text-xl py-3 px-6 w-max flex gap-3 hover:scale-110 transition-all duration-300 hover:bg-red-400 my-4 cursor-pointer" download={"resultado.pdf"} href={`https://ia-securecar.onrender.com/pdf/${idConserto}`} target="_blank">
        Veja o pdf!
        <BsFilePdf color="#bf2121" size={30}/>
      </a>
    </div>
  );
}
