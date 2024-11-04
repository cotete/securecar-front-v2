import { NextResponse } from "next/server";

export type consertoTipo = {
    idConserto :number,
    dataConserto : Date,
    descricaoConserto: string,
    valorConserto:string,
    idUsuario:number
}

export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res = await fetch(`http://localhost:8080/conserto/listar?id_usuario=${params.idUser}`);
        const data: consertoTipo[] = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar consertos", error);
        throw error; 
    }
}


