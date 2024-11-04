import { Carro, CarroId } from "@/app/types";
import { NextResponse } from "next/server";


export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res  = await fetch(`http://localhost:8080/carro/?id_usuario=${params.idUser}`);
        const data :CarroId  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carro", error);

    }
}


