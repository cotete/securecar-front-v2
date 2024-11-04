import { pecasTipo } from "@/components/PerfilComponentes/PecasLista/PecasLista";
import { NextResponse } from "next/server";


export async function GET(request: Request,{params}:{params:{idUser:number,idConserto:number}}) {
    try {
        const res = await fetch(`http://localhost:8080/conserto/${params.idConserto}/pecas`);
        const data : pecasTipo[] = await res.json();
        console.log(data)
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar consertos", error);
        throw error; 
    }
}